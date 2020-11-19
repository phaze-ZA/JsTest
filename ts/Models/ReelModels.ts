type TReelStates = "spinning" | "stopped";

var reelsetConfig : Array<string> = [
    'symbol0',
    'empty',
    'symbol1',
    'empty',
    'symbol2',
    'empty',
    'symbol3',
    'empty',
    'symbol4',
    'empty',
];

class Reel {
    id: number;
    state: TReelStates;
    symbols: Array<string>;
    topRowSymbol:string;
    activeSymbol:string;
    bottomRowSymbol:string;
    constructor(id:number) {
        this.id = id;
        this.state="stopped";
        this.symbols = reelsetConfig;
        this.topRowSymbol = this.symbols[0];
        this.activeSymbol = this.symbols[1];
        this.bottomRowSymbol = this.symbols[2];
    }
    spin(){
        this.state="spinning";
        //display blurred reel
    }
    stop(){
        let index = Math.floor(Math.random()*5);
        if(index===0){
            this.topRowSymbol = this.symbols[this.symbols.length-1];
        }else{
            this.topRowSymbol = this.symbols[index-1];
        }
        this.activeSymbol = this.symbols[index];
        if(index===this.symbols.length-1){
            this.bottomRowSymbol = this.symbols[0];
        }else{
            this.bottomRowSymbol = this.symbols[index+1];
        }
        this.state="stopped";
    }
}