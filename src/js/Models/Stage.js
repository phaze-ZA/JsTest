class Stage {
    constructor() {
        this._height=300;
        this._width=500;
        this.bgSprite=[];
        this.spriteList=[];
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
}

export const StageManager = new Stage();