import Canvas from "./Canvas";
import Reel from "../Models/Reels";

export default class ReelContainer {
    static init() {
        ReelContainer.reels = [];
        ReelContainer.symbolMap = ReelContainer.loadAssets();
        ReelContainer.reelConfig = {
            reel0: {
                drawing: {
                    xStart: 10,
                    yStart: 10,
                },
                sprites: [],
            },
            reel1: {
                drawing: {
                    xStart: 180,
                    yStart: 10,
                },
                sprites: [],
            },
            reel2: {
                drawing: {
                    xStart: 350,
                    yStart: 10,
                },
                sprites: [],
            },
        };
        ReelContainer.winCombos = {
            symbol4: {
                reel0: "symbol4",
                reel1: "symbol4",
                reel2: "symbol4",
                top: 2000,
                mid: 1000,
                bot: 4000,
            },
            symbol3: {
                reel0: "symbol3",
                reel1: "symbol3",
                reel2: "symbol3",
                top: 150,
                mid: 150,
                bot: 150,
            },
            symbol0: {
                reel0: "symbol0",
                reel1: "symbol0",
                reel2: "symbol0",
                top: 50,
                mid: 50,
                bot: 50,
            },
            symbol2: {
                reel0: "symbol2",
                reel1: "symbol2",
                reel2: "symbol2",
                top: 20,
                mid: 20,
                bot: 20,
            },
            symbol1: {
                reel0: "symbol1",
                reel1: "symbol1",
                reel2: "symbol1",
                top: 10,
                mid: 10,
                bot: 10,
            },
            //   symbol012: {
            //     symbols: ["symbol0", "symbol1", "symbol2"],
            //     top: 5,
            //     mid: 5,
            //     bot: 5,
            //   },
            //   symbol34: {
            //     symbols: ["symbol3", "symbol4"],
            //     top: 75,
            //     mid: 75,
            //     bot: 75,
            //   },
        };
    }

    static loadAssets() {
        let obj = {};
        var bg = "./assets/reelContainer.png";
        var assets = [
            "./assets/3xBAR.png",
            "./assets/BAR.png",
            "./assets/2xBAR.png",
            "./assets/7.png",
            "./assets/Cherry.png",
        ];
        Canvas.loadImage(bg, () => {
            let bgSprite = Canvas.addSprite(bg);
            Canvas.stageSprite(bgSprite, Canvas.app.stage);
            bgSprite.width = Canvas.app.renderer.view.width;
            bgSprite.height = Canvas.app.renderer.view.height;
            Canvas.loadImage(assets, ReelContainer.createReels);
        });
        return obj;
    }

    static createReels(symbols) {
        Object.keys(ReelContainer.reelConfig).forEach((reel) => {
            let rC = Canvas.createContainer();
            rC.x = ReelContainer.reelConfig[reel].drawing.xStart;
            symbols.forEach((symbol) => {
                ReelContainer.reelConfig[reel].sprites.push(Canvas.addSprite(symbol));
            });

            ReelContainer.reelConfig[reel].sprites.forEach((sprite) => {
                Canvas.stageSprite(sprite, rC);
                sprite.x = 0;
                sprite.y = ReelContainer.reelConfig[reel].drawing.yStart;
                sprite.visible = false;
            });
            ReelContainer.reels.push(
                new Reel(reel, ReelContainer.reelConfig[reel].sprites)
            );
        });
        return 0;
    }

    static spinReels(results) {
        if(results){
            ReelContainer.reels.forEach((reel) => {
              reel.spin(results[reel.id].pos, results[reel.id].symbol);
            });
        }else{
            ReelContainer.reels.forEach((reel) => {
                reel.spin();
            });
        }
    }

    static stopReels() {
        ReelContainer.reels.forEach((reel) => {
            reel.stop();
        });
        return ReelContainer.checkWin();
    }

    static checkRowWin(row) {
        let hasWin = true;
        let startSymbol = row[0];
        for (let i = 0; i < row.length; i++) {
            const symbol = row[i];
            if (
                startSymbol === "empty" ||
                symbol !== this.winCombos[startSymbol]["reel" + i]
            ) {
                hasWin = false;
            }
        }
        return hasWin;
    }

    static checkWin() {
        let rowWins = {
            topRow: true,
            midRow: true,
            botRow: true,
        };

        let topRow = [];
        let midRow = [];
        let botRow = [];

        ReelContainer.reels.forEach((reel) => {
            topRow.push(reel.landing.top);
            midRow.push(reel.landing.mid);
            botRow.push(reel.landing.bot);
        });
        let topWin = this.checkRowWin(topRow);
        let midWin = this.checkRowWin(midRow);
        let botWin = this.checkRowWin(botRow);
        if (topWin || midWin || botWin) {
            console.log("YOU WIN");
            return true;
        } else {
            console.log("Sorry bud");
            return false;
        }
    }
    // wait 3 seconds
    // static stopReels(){
    //     ReelContainer.reels.forEach(reel =>{
    //         reel.stop();
    //     });
    //     console.table(ReelContainer.reels);
    //     return [];
    // }
}