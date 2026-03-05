/**
 * Wire Manager - Main App Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Initialize Modules ---
    const engine = new PinEngine();

    // --- DOM Elements ---
    const mcuModal = document.getElementById('mcu-modal');
    const mcuGalleryContainer = document.getElementById('mcu-gallery-container');
    const selectedMcuCard = document.getElementById('selected-mcu-card');

    const componentCatalog = document.getElementById('component-catalog');
    const pinTableBody = document.getElementById('pin-table-body');
    const globalStatus = document.getElementById('global-status');

    const textExportArea = document.getElementById('text-export-area');
    const btnCopyText = document.getElementById('btn-copy-text');

    // --- State ---
    let currentMcuId = null;

    // --- Initialization ---
    if (typeof PartsLibrary !== 'undefined') {
        PartsLibrary.loadFromStorage();
        initUI();
        mcuModal.classList.remove('hidden'); // Show MCU picker on start
    } else {
        console.error('PartsLibrary not found! Make sure parts-library.js is loaded.');
    }

    // --- UI Setup Functions ---
    function initUI() {
        populateMCUGallery();
        populateComponentCatalog('all');

        // Event Listeners
        const openMcuModal = () => mcuModal.classList.remove('hidden');

        document.getElementById('btn-change-mcu').addEventListener('click', openMcuModal);
        selectedMcuCard.addEventListener('click', openMcuModal);

        const closeBtn = mcuModal.querySelector('.btn-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                mcuModal.classList.add('hidden');
            });
        }

        // Mode toggles (Removed Bench Mode logic - kept placeholder if needed)
        // document.querySelectorAll('.btn-toggle').forEach(btn => { ... });

        document.getElementById('btn-clear-all').addEventListener('click', () => {
            if (confirm("Reset current project? This will remove all components.")) {
                engine.clear();
                currentMcuId = null;
                selectedMcuCard.innerHTML = '<div class="mcu-placeholder">Select MCU...</div>';
                selectedMcuCard.classList.remove('active');
                document.getElementById('mcu-info-badge').textContent = 'No MCU Selected';
                mcuModal.classList.remove('hidden');
            }
        });

        // Filter chips
        document.querySelectorAll('.filter-chips .chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
                const chipEl = e.target.closest('.chip');
                chipEl.classList.add('active');
                populateComponentCatalog(chipEl.dataset.filter);
            });
        });

        // Search
        document.getElementById('component-search').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-chips .chip.active')?.dataset.filter || 'all';
            populateComponentCatalog(activeFilter, term);
        });

        // Copy Text Button
        btnCopyText.addEventListener('click', () => {
            textExportArea.select();
            document.execCommand('copy');
            const originalText = btnCopyText.textContent;
            btnCopyText.textContent = "Copied!";
            showToast("Copied to clipboard", "ok");
            setTimeout(() => btnCopyText.textContent = originalText, 2000);
        });

        // Project Actions
        document.getElementById('btn-export').addEventListener('click', () => {
            if (!engine.mcu) return showToast("Select an MCU first!", "error");

            // Comprehensive export format
            const data = {
                version: "1.0",
                mcuId: currentMcuId,
                components: engine.components.map(c => ({
                    id: c.data.id,
                    instanceId: c.instanceId
                }))
            };

            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", `mcu_project_${currentMcuId}_${Date.now()}.json`);
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });

        // Import Project
        const inputImportProject = document.getElementById('input-import-project');
        document.getElementById('btn-import-project').addEventListener('click', () => {
            inputImportProject.click();
        });

        inputImportProject.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (engine.loadState(data, PartsLibrary)) {
                        currentMcuId = data.mcuId;
                        const mcuData = PartsLibrary.getMCU(currentMcuId);

                        // Update UI state
                        selectedMcuCard.innerHTML = `
                            <div style="font-weight: 600; color: var(--color-spi)">${mcuData.name}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">${mcuData.voltage}V Logic • ${mcuData.pins.length} Pins</div>
                        `;
                        selectedMcuCard.classList.add('active');
                        document.getElementById('mcu-info-badge').textContent = `${mcuData.name} Active`;

                        showToast("Project imported successfully");
                    } else {
                        showToast("Invalid project file", "error");
                    }
                } catch (err) {
                    showToast("Error reading file", "error");
                }
            };
            reader.readAsText(file);
        });

        // Import Custom Parts
        const inputImportParts = document.getElementById('input-import-parts');
        document.getElementById('btn-import-parts').addEventListener('click', () => {
            inputImportParts.click();
        });

        inputImportParts.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    const partsToAdd = Array.isArray(data) ? data : [data];

                    partsToAdd.forEach(part => {
                        if (!PartsLibrary.getComponent(part.id)) {
                            PartsLibrary.components.push(part);
                        }
                    });

                    const activeFilter = document.querySelector('.filter-chips .chip.active')?.dataset.filter || 'all';
                    populateComponentCatalog(activeFilter);
                    PartsLibrary.saveToStorage();
                    showToast(`Imported ${partsToAdd.length} custom parts`);
                } catch (err) {
                    showToast("Error adding parts", "error");
                }
            };
            reader.readAsText(file);
        });

        // Datasheet Analyzer
        const analyzerModal = document.getElementById('analyzer-modal');
        const btnSmartAdd = document.getElementById('btn-smart-add');
        const datasheetDropZone = document.getElementById('datasheet-drop-zone');
        const inputUploadDatasheet = document.getElementById('input-upload-datasheet');
        const analyzerStatus = document.getElementById('analyzer-status');
        const analyzerProgress = document.getElementById('analyzer-progress');
        const analyzerStatusText = document.getElementById('analyzer-status-text');

        btnSmartAdd.addEventListener('click', () => analyzerModal.classList.remove('hidden'));
        document.getElementById('btn-close-analyzer').addEventListener('click', () => analyzerModal.classList.add('hidden'));

        datasheetDropZone.addEventListener('click', () => inputUploadDatasheet.click());

        datasheetDropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            datasheetDropZone.style.borderColor = 'var(--color-spi)';
            datasheetDropZone.style.background = 'rgba(255,255,255,0.05)';
        });

        datasheetDropZone.addEventListener('dragleave', () => {
            datasheetDropZone.style.borderColor = 'var(--border-glass)';
            datasheetDropZone.style.background = 'transparent';
        });

        datasheetDropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file && file.type === 'application/pdf') processDatasheet(file);
        });

        inputUploadDatasheet.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) processDatasheet(file);
        });

        async function processDatasheet(file) {
            analyzerStatus.classList.remove('hidden');
            analyzerProgress.style.width = '20%';
            analyzerStatusText.textContent = "Reading PDF...";

            try {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

                analyzerProgress.style.width = '40%';
                analyzerStatusText.textContent = `Extracting text from ${pdf.numPages} pages...`;

                let fullText = "";
                // Just peek at first 3 pages to be fast
                const pagesToRead = Math.min(pdf.numPages, 3);
                for (let i = 1; i <= pagesToRead; i++) {
                    const page = await pdf.getPage(i);
                    const contents = await page.getTextContent();
                    fullText += contents.items.map(item => item.str).join(" ");
                }

                analyzerProgress.style.width = '70%';
                analyzerStatusText.textContent = "Analyzing pin patterns...";

                // Simple heuristic for common pins
                const pins = [];
                const searchPatterns = [
                    { name: 'GND', type: 'GND', regex: /\bGND\b|\bGround\b/i },
                    { name: 'VCC', type: 'POWER_3V3', regex: /\bVCC\b|\bVDD\b|\b3\.3V\b/i },
                    { name: '5V', type: 'POWER_5V', regex: /\b5V\b/i },
                    { name: 'SDA', type: 'I2C_SDA', regex: /\bSDA\b/i },
                    { name: 'SCL', type: 'I2C_SCL', regex: /\bSCL\b/i },
                    { name: 'SCK', type: 'SPI_SCK', regex: /\bSCK\b|\bSCLK\b/i },
                    { name: 'MISO', type: 'SPI_MISO', regex: /\bMISO\b|\bSDO\b/i },
                    { name: 'MOSI', type: 'SPI_MOSI', regex: /\bMOSI\b|\bSDI\b/i },
                    { name: 'CS', type: 'SPI_CS', regex: /\bCS\b|\bSS\b|\bChip Select\b/i }
                ];

                searchPatterns.forEach(p => {
                    if (p.regex.test(fullText)) {
                        pins.push({ name: p.name, type: p.type, requireUnique: p.type.includes('CS') });
                    }
                });

                analyzerProgress.style.width = '100%';
                analyzerStatusText.textContent = "Complete!";

                setTimeout(() => {
                    analyzerModal.classList.add('hidden');
                    if (pins.length > 0) {
                        const newPart = {
                            id: 'extracted_' + Date.now(),
                            name: file.name.replace('.pdf', ''),
                            category: 'Imported',
                            protocol: pins.some(p => p.type.startsWith('SPI')) ? 'SPI' : (pins.some(p => p.type.startsWith('I2C')) ? 'I2C' : 'GPIO'),
                            voltage: pins.some(p => p.type === 'POWER_5V') ? 5.0 : 3.3,
                            currentmA: 10,
                            signals: pins,
                            icon: 'EXT'
                        };
                        PartsLibrary.components.push(newPart);
                        populateComponentCatalog('all');
                        PartsLibrary.saveToStorage();
                        showToast(`Extracted ${pins.length} signals from datasheet`);
                    } else {
                        showToast("Could not find clear pin patterns in datasheet", "error");
                    }
                    analyzerStatus.classList.add('hidden');
                    analyzerProgress.style.width = '0%';
                }, 1000);

            } catch (err) {
                console.error(err);
                showToast("Error processing datasheet", "error");
                analyzerStatus.classList.add('hidden');
            }
        }

        // Tab Logic
        document.querySelectorAll('.btn-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));

                btn.classList.add('active');
                document.getElementById(`tab-${tabId}`).classList.remove('hidden');

                if (tabId === 'visual') updateVisualizer(engine.assignments);
            });
        });

        // Listen for engine recalculations
        document.addEventListener('engine-recalculated', (e) => {
            updatePinTable(e.detail.assignments);
            updateTextExport(e.detail.assignments);
            updateValidationStatus();
            if (document.querySelector('.btn-tab[data-tab="visual"]').classList.contains('active')) {
                updateVisualizer(e.detail.assignments);
            }
        });
    }

    function showToast(message, level = 'ok') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${level}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function updateVisualizer(assignments) {
        const container = document.getElementById('mcu-visualizer-container');
        if (!engine.mcu) {
            container.innerHTML = '<div style="text-align: center; color: var(--text-muted);">Select an MCU to view visual map</div>';
            return;
        }

        const mcu = engine.mcu;
        const pinsPerSide = Math.ceil(mcu.pins.length / 2);
        const pinHeight = 30;
        const pinWidth = 80;
        const chipWidth = 200;
        const chipHeight = (pinsPerSide * pinHeight) + 40;
        const totalWidth = chipWidth + (pinWidth * 2) + 400; // Extra room for long names
        const totalHeight = chipHeight + 250;

        let svg = `<svg viewBox="0 0 ${totalWidth} ${totalHeight}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">`;

        // Background Glow
        svg += `<defs>
            <radialGradient id="chipGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style="stop-color:rgba(107, 32, 150, 0.2);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgba(107, 32, 150, 0);stop-opacity:0" />
            </radialGradient>
        </defs>`;
        svg += `<circle cx="${totalWidth / 2}" cy="${totalHeight / 2}" r="${chipHeight}" fill="url(#chipGlow)" />`;

        // Chip Body
        const cx = (totalWidth - chipWidth) / 2;
        const cy = 50;
        svg += `<rect x="${cx}" y="${cy}" width="${chipWidth}" height="${chipHeight}" rx="4" class="mcu-body" />`;
        svg += `<text x="${totalWidth / 2}" y="${cy + 30}" text-anchor="middle" fill="var(--accent-primary)" style="font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">${mcu.name}</text>`;
        svg += `<text x="${totalWidth / 2}" y="${cy + 50}" text-anchor="middle" fill="var(--text-muted)" style="font-size: 8px;">HARDWARE PINOUT SPECIFICATION</text>`;

        // Pins
        mcu.pins.forEach((pin, index) => {
            const isRightSide = index >= pinsPerSide;
            const sideIndex = isRightSide ? index - pinsPerSide : index;

            const px = isRightSide ? cx + chipWidth : cx - pinWidth;
            const py = cy + 40 + (sideIndex * pinHeight);

            const assignment = assignments.find(a => a.mcuPinId === pin.id);
            const isActive = !!assignment;
            const hasWarning = assignment?.warnings.length > 0;

            let rectClass = "mcu-pin-rect";
            if (isActive) rectClass += " active";
            if (hasWarning) rectClass += " warning";

            // Pin wire/lead
            svg += `<line x1="${isRightSide ? cx + chipWidth : cx}" y1="${py + 10}" x2="${isRightSide ? px : px + pinWidth}" y2="${py + 10}" stroke="${isActive ? 'var(--accent-primary)' : 'var(--border-glass)'}" stroke-width="1" />`;

            // Pin Rectangle
            svg += `<rect x="${px}" y="${py}" width="${pinWidth}" height="20" rx="2" class="${rectClass}" />`;

            // Pin ID
            svg += `<text x="${px + 5}" y="${py + 13}" class="mcu-pin-label ${isActive ? 'active' : ''}">${pin.id}</text>`;

            // Signal Label if active
            if (isActive) {
                const comp = engine.components.find(c => c.instanceId === assignment.compInstanceId);
                const compName = comp?.data.name || 'Component';
                const labelX = isRightSide ? px + pinWidth + 10 : px - 10;
                const fullLabel = `${compName} • ${assignment.signalName}`;

                svg += `<text x="${labelX}" y="${py + 13}" text-anchor="${isRightSide ? 'start' : 'end'}" fill="var(--accent-primary)" style="font-size: 10px; font-weight: 800;">${fullLabel}</text>`;
                svg += `<line x1="${isRightSide ? px + pinWidth : px}" y1="${py + 10}" x2="${labelX}" y2="${py + 10}" stroke="var(--accent-primary)" stroke-width="0.5" stroke-dasharray="2,2" />`;
            }
        });

        // Unassigned Signals Block (Enhanced Alert)
        const unassigned = assignments.filter(a => a.mcuPinId === 'UNASSIGNED');
        if (unassigned.length > 0) {
            const boxY = cy + chipHeight + 40;
            const boxHeight = unassigned.length * 18 + 45;

            // Hazard Pattern Definition
            svg += `<defs>
                <pattern id="hazardPattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="5" height="10" fill="rgba(255, 51, 102, 0.15)"></rect>
                </pattern>
            </defs>`;

            svg += `<g class="mcu-warning-block">`;
            svg += `<rect x="${cx}" y="${boxY}" width="${chipWidth}" height="${boxHeight}" rx="0" fill="url(#hazardPattern)" stroke="var(--status-error)" stroke-width="2" />`;
            svg += `<rect x="${cx}" y="${boxY}" width="${chipWidth}" height="20" fill="var(--status-error)" />`;
            svg += `<text x="${cx + chipWidth / 2}" y="${boxY + 14}" text-anchor="middle" fill="white" style="font-size: 10px; font-weight: 900; letter-spacing: 2px;">⚠️ SIGNAL FAULT</text>`;

            unassigned.forEach((ua, i) => {
                const comp = engine.components.find(c => c.instanceId === ua.compInstanceId);
                const compName = comp?.data.name || 'Unknown';
                svg += `<text x="${cx + 10}" y="${boxY + 38 + (i * 18)}" fill="var(--text-main)" style="font-size: 9px; font-weight: bold;">${compName} > ${ua.signalName}</text>`;
                svg += `<text x="${cx + 10}" y="${boxY + 48 + (i * 18)}" fill="var(--status-error)" style="font-size: 7px; text-transform: uppercase; font-weight: 800;">UNASSIGNED</text>`;
            });
            svg += `</g>`;
        }

        svg += `</svg>`;
        svg += `<div class="scanline-effect"></div>`;
        container.innerHTML = svg;
    }

    function populateMCUGallery() {
        mcuGalleryContainer.innerHTML = '';
        PartsLibrary.getAllMCUs().forEach(mcu => {
            const card = document.createElement('div');
            card.className = 'mcu-card';
            card.innerHTML = `
                <div style="font-size: 0.7rem; color: var(--color-spi); font-weight: 700; margin-bottom: 4px;">${mcu.category}</div>
                <h3 style="font-size: 1rem;">${mcu.name}</h3>
                <p style="color:var(--text-muted); font-size: 0.75rem; margin-top: 8px;">${mcu.pins.length} Pins • ${mcu.voltage}V Logic</p>
            `;
            card.addEventListener('click', () => {
                selectMCU(mcu.id);
                mcuModal.classList.add('hidden');
                showToast(`${mcu.name} selected`);
            });
            mcuGalleryContainer.appendChild(card);
        });
    }

    function populateComponentCatalog(filter, searchTerm = '') {
        componentCatalog.innerHTML = '';
        let parts = PartsLibrary.getAllComponents();

        if (filter !== 'all') {
            parts = parts.filter(p => p.protocol.toUpperCase() === filter.toUpperCase());
        }

        if (searchTerm) {
            parts = parts.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.category.toLowerCase().includes(searchTerm) ||
                p.protocol.toLowerCase().includes(searchTerm)
            );
        }

        parts.forEach(part => {
            const card = document.createElement('div');
            card.className = 'component-card';

            let protoClass = '';
            if (part.protocol === 'SPI') protoClass = 'proto-spi';
            if (part.protocol === 'I2C') protoClass = 'proto-i2c';
            if (part.protocol === 'CAN') protoClass = 'proto-can';
            if (part.protocol === 'PWM') protoClass = 'proto-pwm';

            card.innerHTML = `
                <div class="comp-icon">${part.icon}</div>
                <div class="comp-info">
                    <div class="comp-name">${part.name}</div>
                    <div class="comp-meta">${part.category} • ${part.voltage}V</div>
                </div>
                <div class="chip ${protoClass} active" style="font-size: 0.6rem; margin-top: 4px;">${part.protocol}</div>
            `;

            card.addEventListener('click', () => {
                if (!currentMcuId) {
                    showToast("Select MCU first!", "error");
                    mcuModal.classList.remove('hidden');
                    return;
                }
                addComponent(part.id);
                showToast(`Added ${part.name}`);
            });

            componentCatalog.appendChild(card);
        });
    }

    // --- Core Actions ---

    function selectMCU(mcuId) {
        currentMcuId = mcuId;
        const mcuData = PartsLibrary.getMCU(mcuId);

        selectedMcuCard.innerHTML = `
            <div style="font-weight: 600; color: var(--color-spi)">${mcuData.name}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">${mcuData.voltage}V Logic • ${mcuData.pins.length} Pins</div>
        `;
        selectedMcuCard.classList.add('active');
        document.getElementById('mcu-info-badge').textContent = `${mcuData.name} Active`;

        engine.setMCU(mcuData);
    }

    function addComponent(compId) {
        const compData = PartsLibrary.getComponent(compId);
        engine.addComponent(compData);
    }

    function removeComponent(instanceId) {
        engine.removeComponent(instanceId);
    }

    // --- Updates ---

    function updateTextExport(assignments) {
        if (!engine.mcu) {
            textExportArea.value = "// Select an MCU to generate spec...";
            return;
        }

        let output = `/* \n * Wire Manager Configuration \n * Target: ${engine.mcu.name} \n */\n\n`;

        // C-style defines or descriptive text
        output += `// --- Pin Map ---\n`;

        const grouped = {};
        assignments.forEach(a => {
            const comp = engine.components.find(c => c.instanceId === a.compInstanceId);
            const key = comp ? `${comp.data.name} [${comp.data.protocol}]` : 'Other';
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(a);
        });

        for (const label in grouped) {
            output += `// ${label}\n`;
            grouped[label].forEach(a => {
                const pinStr = a.mcuPinId.padEnd(6);
                const sigStr = a.signalName.padEnd(10);
                output += `#define PIN_${sigStr}${pinStr} // ${a.warnings.length ? 'WARN: ' + a.warnings.join(', ') : 'OK'}\n`;
            });
            output += `\n`;
        }

        const status = engine.getValidationStatus();
        output += `// Generation Status: ${status.level.toUpperCase()} - ${status.message}\n`;

        textExportArea.value = output;
    }

    function updatePinTable(assignments) {
        pinTableBody.innerHTML = '';

        if (!engine.mcu || assignments.length === 0) {
            pinTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 40px;">Add components to begin.</td></tr>`;
            return;
        }

        assignments.forEach(a => {
            const comp = engine.components.find(c => c.instanceId === a.compInstanceId);
            const compName = comp?.data.name || 'Unknown';
            const compProto = comp?.data.protocol || '';

            const tr = document.createElement('tr');

            let statusHtml = '<span class="badge badge-ok">OK</span>';
            if (a.mcuPinId === 'UNASSIGNED') {
                statusHtml = '<span class="badge badge-error">Unassigned</span>';
                tr.classList.add('row-error');
            } else if (a.warnings && a.warnings.length > 0) {
                statusHtml = `<span class="badge badge-warn" title="${a.warnings.join(', ')}">Warning</span>`;
                tr.classList.add('row-warn');

                // Add specific warning text
                a.warnings.forEach(w => {
                    statusHtml += `<div style="font-size: 0.7rem; color: var(--status-warn); margin-top: 4px;">• ${w}</div>`;
                });
            }

            tr.innerHTML = `
                <td class="mono" style="color: var(--color-spi); font-weight: bold;">${a.mcuPinId}</td>
                <td class="mono">${a.signalName}</td>
                <td style="font-weight: 500;">${compName}</td>
                <td><span class="chip proto-${compProto.toLowerCase()} active" style="font-size: 0.65rem;">${compProto}</span></td>
                <td>${statusHtml}</td>
                <td><button class="btn-icon" onclick="document.dispatchEvent(new CustomEvent('remove-comp', {detail: '${a.compInstanceId}'}))" title="Remove Component">✕</button></td>
            `;
            pinTableBody.appendChild(tr);
        });
    }

    // Global listener for inline trash button
    document.addEventListener('remove-comp', (e) => {
        removeComponent(e.detail);
        showToast("Component removed");
    });

    function updateValidationStatus() {
        if (!engine.mcu) {
            globalStatus.className = 'validation-status';
            globalStatus.innerHTML = '<span>No MCU Selected</span>';
            return;
        }

        const status = engine.getValidationStatus();
        let statusClass = 'status-ok';
        if (status.level === 'warn') statusClass = 'status-warn';
        if (status.level === 'error') statusClass = 'status-error';

        globalStatus.className = `validation-status ${statusClass}`;
        globalStatus.innerHTML = `
            <span class="status-icon"></span>
            <span class="status-text" style="display: flex; align-items: center; justify-content: center;">${status.message}</span>
        `;
    }

});
