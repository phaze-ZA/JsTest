class Player {
    constructor() {
        this._bet = 1;
        this._balance = 10;
        this._spinDelay = 1000;
        this._debugger = false;
        this._fixedMode = false;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value > 0 ? (value < 5000 ? value : 5000) : 0;
    }
    get bet() {
        return this._bet;
    }
    get spinDelay() {
        return this._spinDelay;
    }
    get debugger() {
        return this._debugger;
    }
    set debugger(value) {
        this._debugger = value;
    }
    get fixedMode() {
        return this._fixedMode;
    }
    set fixedMode(value) {
        this._fixedMode = value;
    }
    canPlayerSpin() {
        if (this.balance - this.bet >= 0) {
            return true;
        } else {
            return false;
        }
    }
}

export const PlayerManager = new Player();