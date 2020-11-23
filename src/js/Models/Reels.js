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
        this.topSymbol = this.reelPosConfig[this.reelPosConfig.length - 1];
        this.middleSymbol = this.reelPosConfig[0];
        this.bottomSymbol = this.reelPosConfig[1];
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
        if (this.middleSymbol === "empty") {
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
    spin() {
        let landingIdx = Math.floor(Math.random() * 9);
        this.symbols.forEach((symbol) => {
            symbol.visible = false;
        });

        this.topSymbol = this.reelPosConfig[((landingIdx - 1) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        this.display.top = this.topSymbol;
        if (this.topSymbol === "empty") {
            this.display.top = this.reelPosConfig[
                (((landingIdx - 2) % this.reelPosConfig.length) +
                    this.reelPosConfig.length) %
                this.reelPosConfig.length
            ];
        }

        this.middleSymbol = this.reelPosConfig[landingIdx];
        this.display.mid = this.middleSymbol;

        this.bottomSymbol = this.reelPosConfig[((landingIdx + 1) % this.reelPosConfig.length + this.reelPosConfig.length) % this.reelPosConfig.length];
        this.display.bot = this.bottomSymbol;
        if (this.bottomSymbol === "empty") {
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