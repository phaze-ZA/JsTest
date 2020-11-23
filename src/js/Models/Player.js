class Player {
    constructor() {
        this._bet = 1;
        this._balance = 10;
        this._spinDelay = 1000;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value > 0 ? value : 0;
    }
    get bet() {
        return this._bet;
    }
    get spinDelay() {
        return this._spinDelay;
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