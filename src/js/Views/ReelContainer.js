import Canvas from "./Canvas";
import Reel from "../Models/Reels";
import {StageManager} from '../Models/Stage';

export default class ReelContainer {
    static init() {
        ReelContainer.reels = [];
        ReelContainer.winLines = [];
        ReelContainer.symbolMap = ReelContainer.loadAssets();
        ReelContainer.reelConfig = {
            reel0: {
                drawing: {
                    xStart: 10,
                    yStart: 10,
                },
                sprites: [],
                animation:0,
            },
            reel1: {
                drawing: {
                    xStart: 180,
                    yStart: 10,
                },
                sprites: [],
                animation:0,
            },
            reel2: {
                drawing: {
                    xStart: 350,
                    yStart: 10,
                },
                sprites: [],
                animation:0,
            },
        };
        ReelContainer.lineConfig = {
            top:38,
            mid:76,
            bot:114,
        };
        ReelContainer.backGround = '';
        /*winMap = {
            reel0:{
                reel1a:{
                    reel2:{

                    },
                    reel2a:{

                    }
                },
                reel1b:{
                    reel2:{

                    },
                    reel2a:{

                    }
                }
            }
        }*/
        ReelContainer.winMap = {
            symbol4: {//CHERRY START
                symbol4:{
                    symbol4:{//3 CHERRY
                        winId:'cherry',
                        top: 2000,
                        mid: 1000,
                        bot: 4000,
                    },
                    symbol3:{//CHERRY & SEVEN COMBO
                        winId:'cherrySeven',
                        top:75,
                        middle:75,
                        bot:75
                    }
                },
                symbol3:{
                    winId:'cherrySeven',
                    top:75,
                    mid:75,
                    bot:75,
                    symbol4:{//CHERRY & SEVEN COMBO
                        winId:'cherrySeven',
                        top: 75,
                        mid: 75,
                        bot: 75,
                    },
                    symbol3:{//CHERRY & SEVEN COMBO
                        winId:'cherrySeven',
                        top:75,
                        middle:75,
                        bot:75
                    }
                },
            },
            symbol3: {//SEVEN START
                symbol3:{
                    symbol4:{//CHERRY & SEVEN COMBO
                        winId:'cherrySeven',
                        top: 75,
                        mid: 75,
                        bot: 75,
                    },
                    symbol3:{//SEVEN COMBO
                        winId:'3seven',
                        top: 150,
                        mid: 150,
                        bot: 150,
                    }
                },
                symbol4:{
                    winId:'cherrySeven',
                    top: 75,
                    mid: 75,
                    bot: 75,
                    symbol4:{//CHERRY & SEVEN COMBO
                        winId:'cherrySeven',
                        top: 75,
                        mid: 75,
                        bot: 75,
                    },
                    symbol3:{//CHERRY & SEVEN COMBO
                        winId:'cherrySeven',
                        top: 75,
                        mid: 75,
                        bot: 75,
                    }
                },
            },
            symbol0: {//3BAR
                symbol0:{//3BARx2
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol0:{//3BAR COMBO
                        winId:'3threeBar',
                        top: 50,
                        mid: 50,
                        bot: 50,
                    },
                    symbol1:{//3BARx2 + BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol2:{//3BARx2 + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                },
                symbol1:{//3BAR + BAR
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol0:{//3BAR+ BAR + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol1:{//3BAR + BAR+ BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol2:{//3BAR + BAR + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                },
                symbol2:{//3BAR + 2BAR
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol0:{//3BAR+2BAR + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol1:{//3BAR + 2BAR +BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol2:{//3BAR + 2BAR + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                }
            },
            symbol2: {//2BAR
                symbol2:{//2BARx2
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol2:{//2BAR COMBO
                        winId:"3twoBar",
                        top: 20,
                        mid: 20,
                        bot: 20,
                    },
                    symbol1:{//2BARx2 + BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol0:{//2BARx2 + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                },
                symbol1:{//2BAR + BAR
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol0:{//2BAR+ BAR + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol1:{//2BAR + BAR+ BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol2:{//2BAR + BAR + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                },
                symbol0:{//2BAR + 3BAR
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol0:{//2BAR+3BAR + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol1:{//2BAR + 3BAR +BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol2:{//2BAR + 3BAR + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                }
            },
            symbol1: {//BAR
                symbol1:{//BARx2
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol1:{//BAR COMBO
                        winId:'3oneBar',
                        top: 10,
                        mid: 10,
                        bot: 10,
                    },
                    symbol2:{//BARx2 + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol0:{//BARx2 + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                },
                symbol2:{//BAR + 2BAR
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol0:{//BAR+ 2BAR + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol1:{//BAR + 2BAR+ BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol2:{//BAR + 2BAR + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                },
                symbol0:{//BAR + 3BAR
                    winId:'anyBar',
                    top: 5,
                    mid: 5,
                    bot: 5,
                    symbol0:{//BAR+3BAR + 3BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol1:{//BAR + 3BAR +BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                    symbol2:{//BAR + 3BAR + 2BAR COMBO
                        winId:'anyBar',
                        top: 5,
                        mid: 5,
                        bot: 5,
                    },
                }
            },
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
            ReelContainer.backGround = Canvas.addSprite(
                bg,
                StageManager.bgSprite
            );
            Canvas.stageSprite(ReelContainer.backGround, StageManager.stage);
            ReelContainer.backGround.width = StageManager.width;
            ReelContainer.backGround.height = StageManager.height;
            Canvas.loadImage(assets, ReelContainer.createReels);
        });
        return obj;
    }

    static createReels(symbols) {
        Object.keys(ReelContainer.reelConfig).forEach((reel) => {
            let rC = Canvas.createContainer();
            rC.x = ReelContainer.reelConfig[reel].drawing.xStart;
            symbols.forEach((symbol) => {
                ReelContainer.reelConfig[reel].sprites.push(Canvas.addSprite(symbol,StageManager.spriteList));
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
        for (let i = 0; i < ReelContainer.winLines.length; i++) {
            const element = ReelContainer.winLines[i];
            Canvas.removeSprite(element,Canvas.app.stage);
        }
        ReelContainer.winLines=[];
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
        let counter = 0;
        ReelContainer.reels.forEach((reel) => {
            setTimeout(() => {
                reel.stop();
            }, 500*counter);
            counter++;
        });
        return ReelContainer.checkWin();
    }

    static checkRowWin(row,rowName) {
        let map=this.winMap;
        let win = {
            value:0,
            id:''
        };
        let winLine;
        for (let i = 0; i < row.length; i++) {
            const symbol = row[i];
            if(map[symbol]){
                map=map[symbol];
            }else{
                break;
            }
        }
        if(map[rowName]){
            winLine = Canvas.drawLine(ReelContainer.lineConfig[rowName]);
            ReelContainer.winLines.push(winLine);
            Canvas.stageSprite(winLine,Canvas.app.stage);
            win.value= map[rowName];
            if(map.winId==="cherry"){
                win.id = map.winId + rowName;
            }else{
                win.id = map.winId;
            }
        }
        return win;
    }

    static checkWin() {
        let topRow = [];
        let midRow = [];
        let botRow = [];
        let topWin = 0;
        let midWin = 0;
        let botWin = 0;
        let totalWinObj={
            value:0,
            idList:[]
        };

        ReelContainer.reels.forEach((reel) => {
            topRow.push(reel.landing.top);
            midRow.push(reel.landing.mid);
            botRow.push(reel.landing.bot);
        });

        topWin = this.checkRowWin(topRow,'top');
        midWin = this.checkRowWin(midRow,'mid');
        botWin = this.checkRowWin(botRow,'bot');

        if (topWin.value>0 || midWin.value>0 || botWin.value>0) {
            totalWinObj.value = topWin.value + midWin.value + botWin.value;
            totalWinObj.idList.push(topWin.id,midWin.id,botWin.id);
        }
        return totalWinObj;
    }
}