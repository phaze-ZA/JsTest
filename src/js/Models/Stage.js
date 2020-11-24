class Stage {
    constructor() {
        this._height=300;
        this._width=500;
        this.bgSprite=[];
        this.spriteList=[];
        this.parentDiv = document.getElementById("reelContainer");
        this._ratio = this.width/this.height;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (this.parentDiv.offsetHeight < this.parentDiv.offsetWidth){
            this._height = value;
        }else{
            this._height = this.width/this._ratio;
        }
    }
    get width() {
        return this._width;
    }
    set width(value) {
        if (this.parentDiv.offsetHeight > this.parentDiv.offsetWidth) {
          this._width = value;
        } else {
          this._width = this.height * this._ratio;
        }
    }
}

export const StageManager = new Stage();