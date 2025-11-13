export class InputManager {
    constructor() {
        this.keys = new Uint8Array(256);

        // Map keyboard codes to indexes explicitly
        this.map = {
            "KeyW": 0,
            "KeyA": 1,
            "KeyS": 2,
            "KeyD": 3,
            "ArrowUp": 4,
            "ArrowLeft": 5,
            "ArrowDown": 6,
            "ArrowRight": 7,
        };

        this._onKeyDown = this.onKeyDown.bind(this);
        this._onKeyUp = this.onKeyUp.bind(this);

        window.addEventListener("keydown", this._onKeyDown);
        window.addEventListener("keyup", this._onKeyUp);
    }

    codeToIndex(code) {
        return this.map[code] ?? -1;
    }

    onKeyDown(e) {
        const i = this.codeToIndex(e.code);
        if (i !== -1) this.keys[i] = 1;
    }

    onKeyUp(e) {
        const i = this.codeToIndex(e.code);
        if (i !== -1) this.keys[i] = 0;
    }

    isDown(code) {
        const i = this.map[code];
        if (i === undefined) return false;
        return this.keys[i] === 1;
    }
}
