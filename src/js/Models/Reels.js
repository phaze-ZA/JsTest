export default class Reel {
    constructor(id, symbols) {
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
        this.possiblePositions = {
            topRow: 10,
            middleRow: 95,
            bottomRow: 180,
        };
        this.display = {
            top: this.reelPosConfig[this.reelPosConfig.length - 2],
            mid: this.reelPosConfig[0],
            bot: this.reelPosConfig[2],
        };
        this.landing = {
          top: this.reelPosConfig[this.reelPosConfig.length - 1],
          mid: this.reelPosConfig[0],
          bot: this.reelPosConfig[1],
        };
        this.setSymbols();
    }
    mapSymbols() {
        let symbolMap = {};
        for (let i = 0; i < this.symbols.length; i++) {
            const symbol = this.symbols[i];
            symbolMap['symbol' + i] = symbol;
        }
        return symbolMap;
    }
    setSymbols() {
        if (this.landing.mid === "empty") {
            this.symbolMap[this.display.top].y = this.possiblePositions.topRow;
            this.symbolMap[this.display.top].visible = true;
            this.symbolMap[this.display.bot].y = this.possiblePositions.bottomRow;
            this.symbolMap[this.display.bot].visible = true;
        } else {
            this.symbolMap[this.display.top].y = this.possiblePositions.topRow - 65;
            this.symbolMap[this.display.top].visible = true;
            this.symbolMap[this.display.mid].y = this.possiblePositions.middleRow;
            this.symbolMap[this.display.mid].visible = true;
            this.symbolMap[this.display.bot].y = this.possiblePositions.bottomRow + 65;
            this.symbolMap[this.display.bot].visible = true;
        }
    }
    spin(pos,symbol) {
        let landingIdx = 0;
        this.symbols.forEach((symbol) => {
            symbol.visible = false;
        });
        if(pos && symbol){
            if (pos === "top") {
              landingIdx =
                (((this.reelPosConfig.indexOf(symbol) + 1) %
                  this.reelPosConfig.length) +
                  this.reelPosConfig.length) %
                this.reelPosConfig.length;
            }
            if (pos === "mid") {
              landingIdx = this.reelPosConfig.indexOf(symbol);
            }
            if (pos === "bot") {
              landingIdx = (((this.reelPosConfig.indexOf(symbol)-1) % this.reelPosConfig.length) +
                this.reelPosConfig.length) %
                this.reelPosConfig.length;
            }
            
        }else
        {
            landingIdx = Math.floor(Math.random() * 9);
        }

        this.landing.top = this.reelPosConfig[((landingIdx - 1) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        this.display.top = this.landing.top;
        if (this.landing.top === "empty") {
            this.display.top = this.reelPosConfig[
                (((landingIdx - 2) % this.reelPosConfig.length) +
                    this.reelPosConfig.length) %
                this.reelPosConfig.length
            ];
        }

        this.landing.mid = this.reelPosConfig[landingIdx];
        this.display.mid = this.landing.mid;

        this.landing.bot = this.reelPosConfig[((landingIdx + 1) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        this.display.bot = this.landing.bot;
        if (this.landing.bot === "empty") {
            this.display.bot = this.reelPosConfig[
                (((landingIdx + 2) % this.reelPosConfig.length) +
                    this.reelPosConfig.length) %
                this.reelPosConfig.length
            ];
        }

    }

    stop() {
        this.setSymbols();
    }
}