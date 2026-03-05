/**
 * Wire Manager - Diagram Renderer
 * Handles the SVG canvas, drawing MCU, components, and routing wires.
 */

class DiagramRenderer {
    constructor(svgElementId) {
        this.svg = document.getElementById(svgElementId);
        this.mcuLayer = this.svg.querySelector('#mcu-layer');
        this.compLayer = this.svg.querySelector('#component-layer');
        this.wireLayer = this.svg.querySelector('#wire-layer');

        this.mcu = null;
        this.components = [];
        this.assignments = [];
        this.pinCoords = {}; // Store {x,y} for each pin id

        // Layout config
        this.mcuWidth = 120;
        this.mcuHeight = 240;
        this.pinSpacing = 20;

        this._setupZoomPan();
    }

    _setupZoomPan() {
        // Basic drag-to-pan
        let isPanning = false;
        let startX, startY;
        let viewBox = { x: -400, y: -300, w: 800, h: 600 }; // Centered roughly

        const updateViewBox = () => {
            this.svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
        };
        updateViewBox();

        this.svg.addEventListener('mousedown', (e) => {
            if (e.target === this.svg || e.target.tagName === 'rect' && e.target.getAttribute('fill').includes('grid')) {
                isPanning = true;
                startX = e.clientX;
                startY = e.clientY;
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (!isPanning) return;
            const dx = (startX - e.clientX) * (viewBox.w / this.svg.clientWidth);
            const dy = (startY - e.clientY) * (viewBox.h / this.svg.clientHeight);
            viewBox.x += dx;
            viewBox.y += dy;
            startX = e.clientX;
            startY = e.clientY;
            updateViewBox();
        });

        window.addEventListener('mouseup', () => {
            isPanning = false;
        });

        // Zoom
        this.svg.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomAmount = e.deltaY > 0 ? 1.1 : 0.9;
            const mouseX = e.offsetX;
            const mouseY = e.offsetY;

            // Calculate coordinates in SVG space
            const svgX = viewBox.x + (mouseX / this.svg.clientWidth) * viewBox.w;
            const svgY = viewBox.y + (mouseY / this.svg.clientHeight) * viewBox.h;

            viewBox.w *= zoomAmount;
            viewBox.h *= zoomAmount;

            // Adjust x/y to keep mouse point stationary
            viewBox.x = svgX - (mouseX / this.svg.clientWidth) * viewBox.w;
            viewBox.y = svgY - (mouseY / this.svg.clientHeight) * viewBox.h;

            updateViewBox();
        });

        // Buttons
        document.getElementById('btn-zoom-reset')?.addEventListener('click', () => {
            viewBox = { x: -400, y: -300, w: 800, h: 600 };
            updateViewBox();
        });
    }

    render(mcu, components, assignments) {
        this.mcu = mcu;
        this.components = components;
        this.assignments = assignments;

        this.clear();

        if (this.mcu) {
            this.drawMCU();
            this.drawComponents();
            this.drawWires();
        }
    }

    clear() {
        this.mcuLayer.innerHTML = '';
        this.compLayer.innerHTML = '';
        this.wireLayer.innerHTML = '';
        this.pinCoords = {};
    }

    drawMCU() {
        if (!this.mcu) return;

        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

        // Main body
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute('x', -this.mcuWidth / 2);
        rect.setAttribute('y', -this.mcuHeight / 2);
        rect.setAttribute('width', this.mcuWidth);
        rect.setAttribute('height', this.mcuHeight);
        rect.setAttribute('class', 'mcu-rect');
        g.appendChild(rect);

        // Title
        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
        title.setAttribute('x', 0);
        title.setAttribute('y', -this.mcuHeight / 2 + 20);
        title.setAttribute('text-anchor', 'middle');
        title.setAttribute('class', 'pin-text');
        title.setAttribute('font-weight', 'bold');
        title.textContent = this.mcu.category;
        g.appendChild(title);

        // Pins (split left and right)
        const leftPins = Math.ceil(this.mcu.pins.length / 2);

        this.mcu.pins.forEach((pin, index) => {
            const isLeft = index < leftPins;
            const sideIndex = isLeft ? index : index - leftPins;

            const x = isLeft ? -this.mcuWidth / 2 : this.mcuWidth / 2;
            const y = -this.mcuHeight / 2 + 40 + (sideIndex * this.pinSpacing);

            // Pin pad
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', 5);
            circle.setAttribute('class', 'pin-circle');
            circle.setAttribute('data-pin', pin.id);
            circle.setAttribute('id', `mcu-pin-${pin.id}`);

            // Store exact local coordinates
            this.pinCoords[`mcu-${pin.id}`] = { x: x, y: y };

            // Label
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute('x', isLeft ? x + 12 : x - 12);
            text.setAttribute('y', y + 4);
            text.setAttribute('text-anchor', isLeft ? 'start' : 'end');
            text.setAttribute('class', 'pin-text');
            text.textContent = pin.label;

            g.appendChild(circle);
            g.appendChild(text);
        });

        this.mcuLayer.appendChild(g);
    }

    drawComponents() {
        // Arrange components in a semi-circle around the MCU
        const radius = 250;
        const compCount = this.components.length;

        this.components.forEach((comp, index) => {
            // Calculate angle (-pi/2 to pi/2, avoiding top/bottom directly if possible)
            let angle;
            if (compCount === 1) angle = 0;
            else {
                // Distribute evenly along the right side for simplicity, or left/right
                const isLeft = index % 2 === 0;
                const sideIndex = Math.floor(index / 2);
                const itemsOnSide = Math.ceil(compCount / 2);

                let yOffset = (sideIndex - (itemsOnSide - 1) / 2) * 80;
                let xOffset = isLeft ? -radius : radius;

                this.drawSingleComponent(comp, xOffset, yOffset, isLeft);
            }
        });
    }

    drawSingleComponent(comp, cx, cy, isLeft) {
        const w = 100;
        const h = 20 + (comp.data.signals.length * this.pinSpacing);

        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute('transform', `translate(${cx - w / 2}, ${cy - h / 2})`);
        g.setAttribute('id', `comp-${comp.instanceId}`);
        g.style.cursor = 'move';

        // Body
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute('width', w);
        rect.setAttribute('height', h);
        rect.setAttribute('class', 'comp-rect');
        g.appendChild(rect);

        // Title
        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
        title.setAttribute('x', w / 2);
        title.setAttribute('y', 15);
        title.setAttribute('text-anchor', 'middle');
        title.setAttribute('class', 'pin-text');
        title.textContent = comp.data.name.substring(0, 12) + (comp.data.name.length > 12 ? '...' : '');
        g.appendChild(title);

        // Pins
        comp.data.signals.forEach((sig, i) => {
            const y = 30 + (i * this.pinSpacing);
            const x = isLeft ? w : 0; // pins face MCU

            // Pin pad
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', 4);
            circle.setAttribute('class', 'pin-circle');
            circle.setAttribute('id', `comp-pin-${comp.instanceId}-${sig.name}`);

            // Store global coordinate by accounting for the component's transform translation
            this.pinCoords[`comp-${comp.instanceId}-${sig.name}`] = {
                x: cx - w / 2 + x,
                y: cy - h / 2 + y
            };

            // Label
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute('x', isLeft ? x - 8 : x + 8);
            text.setAttribute('y', y + 4);
            text.setAttribute('text-anchor', isLeft ? 'end' : 'start');
            text.setAttribute('class', 'pin-text');
            text.textContent = sig.name;

            g.appendChild(circle);
            g.appendChild(text);
        });

        this.compLayer.appendChild(g);
    }

    drawWires() {
        // Draw lines from MCU pins to Component pins using stored coordinates
        this.assignments.forEach(assignment => {
            if (assignment.mcuPinId === 'UNASSIGNED') return;

            const startCoords = this.pinCoords[`mcu-${assignment.mcuPinId}`];
            const endCoords = this.pinCoords[`comp-${assignment.compInstanceId}-${assignment.signalName}`];

            if (startCoords && endCoords) {
                this.drawOrthogonalWire(
                    startCoords.x, startCoords.y,
                    endCoords.x, endCoords.y,
                    this._getProtocolClass(assignment.signalName)
                );
            }
        });
    }

    drawOrthogonalWire(x1, y1, x2, y2, cssClass) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        // Simple orthogonal routing
        const midX = x1 + (x2 - x1) / 2;
        const d = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;

        path.setAttribute('d', d);
        path.setAttribute('class', cssClass);
        path.style.opacity = '0.6';

        // Hover effect styling
        path.addEventListener('mouseover', () => path.style.opacity = '1');
        path.addEventListener('mouseout', () => path.style.opacity = '0.6');

        this.wireLayer.appendChild(path);
    }

    _getProtocolClass(signalName) {
        const name = signalName.toUpperCase();
        if (name.includes('MISO') || name.includes('MOSI') || name.includes('SCK') || name.includes('CS') || name.includes('SO') || name.includes('SI')) return 'wire-spi';
        if (name.includes('SDA') || name.includes('SCL')) return 'wire-i2c';
        if (name.includes('TX') || name.includes('RX')) return 'wire-uart';
        if (name.includes('CAN')) return 'wire-can';
        if (name === 'VCC' || name === 'VDD' || name === 'VIN' || name === '5V' || name === '3V3') return 'wire-power'; // Needs CSS
        return 'wire-spi'; // default
    }
}

window.DiagramRenderer = DiagramRenderer;
c o n s o l e . l o g ( ' d i a g r a m . j s   l o a d e d ' ) ;  
 