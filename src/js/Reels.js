export default class Reel{
    constructor(id, symbols){
        this.id = id;
        this.symbols = symbols;
        this.reelPosConfig = [
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
        this.symbolMap = this.mapSymbols();
        this.possiblePositions={
            topRow:10,
            middleRow:95,
            bottomRow:180,
        };
        this.topSymbol  = this.reelPosConfig[this.reelPosConfig.length-1];
        this.topSymbol  = this.reelPosConfig[this.reelPosConfig.length-2];
        this.middleSymbol = this.reelPosConfig[0];
        this.bottomSymbol  = this.reelPosConfig[2];
        this.setSymbols();
    }
    mapSymbols(){
        let symbolMap = {};
        for(let i=0;i<this.symbols.length;i++){
            const symbol = this.symbols[i];
            symbolMap['symbol'+i]=symbol;
        }
        return symbolMap;
    }
    setSymbols(){
        this.symbols.forEach(symbol => {
            symbol.visible=false;            
        });
        if(this.middleSymbol==="empty"){
            this.symbolMap[this.topSymbol].y = this.possiblePositions.topRow;
            this.symbolMap[this.topSymbol].visible = true;
            this.symbolMap[this.bottomSymbol].y = this.possiblePositions.bottomRow;
            this.symbolMap[this.bottomSymbol].visible = true;
        }else{
            this.symbolMap[this.topSymbol].y = this.possiblePositions.topRow-65;
            this.symbolMap[this.topSymbol].visible = true;
            this.symbolMap[this.middleSymbol].y = this.possiblePositions.middleRow;
            this.symbolMap[this.middleSymbol].visible = true;
            this.symbolMap[this.bottomSymbol].y = this.possiblePositions.bottomRow+65;
            this.symbolMap[this.bottomSymbol].visible = true;
        }
    }
    spin(){
        let landingIdx = Math.floor(Math.random()*9);

        this.topSymbol = this.reelPosConfig[((landingIdx-1) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        if(this.topSymbol==="empty"){
                this.topSymbol =this.reelPosConfig[((landingIdx-2) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        }

        this.middleSymbol = this.reelPosConfig[landingIdx];

        this.bottomSymbol = this.reelPosConfig[((landingIdx+1) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        if(this.bottomSymbol==="empty"){
                this.bottomSymbol =this.reelPosConfig[((landingIdx+2) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        }


        this.setSymbols();
    }
}