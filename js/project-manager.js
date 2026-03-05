/**
 * Wire Manager - Project Manager
 * Handles saving/loading state (versions) to LocalStorage.
 */

class ProjectManager {
    constructor() {
        this.projectId = 'wire_manager_default_project';
        this.versions = this.loadVersions();
    }

    loadVersions() {
        const data = localStorage.getItem(this.projectId);
        if (data) {
            try {
                return JSON.parse(data);
            } catch (e) {
                console.error('Failed to parse saved versions', e);
                return [];
            }
        }
        return [];
    }

    saveSnapshot(mcuId, components, assignments, note = "Manual Save", isAuto = false) {
        const snapshot = {
            id: 'v_' + Date.now(),
            timestamp: Date.now(),
            note: note,
            isAuto: isAuto,
            state: {
                mcuId: mcuId,
                components: components.map(c => ({
                    instanceId: c.instanceId,
                    dataId: c.data.id
                })),
                assignments: assignments
            }
        };

        this.versions.push(snapshot);

        // Keep max 20 versions to avoid localStorage bloat
        if (this.versions.length > 20) {
            this.versions.shift();
        }

        this._persist();
        return snapshot;
    }

    _persist() {
        localStorage.setItem(this.projectId, JSON.stringify(this.versions));
        document.dispatchEvent(new CustomEvent('versions-updated', { detail: this.versions }));
    }

    getLatest() {
        if (this.versions.length === 0) return null;
        return this.versions[this.versions.length - 1];
    }

    getAllVersions() {
        return this.versions;
    }

    clearAll() {
        this.versions = [];
        this._persist();
    }

    exportProject() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.versions, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `wire_manager_project_${Date.now()}.wirespec`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
}

window.ProjectManager = ProjectManager;
