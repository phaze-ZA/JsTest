import Canvas from './Canvas';
import Reel from '../Reels';

export default class ReelContainer{

    static init(){
        var reels;
        var width;
        var height;
        ReelContainer.reels = [];
        ReelContainer.symbolMap=ReelContainer.loadAssets();
        ReelContainer.reelConfig = {
            reel0:{
                drawing:{
                    xStart: 10,
                    yStart: 10
                },
                sprites:[]
            },
            reel1:{
                drawing:{
                    xStart: 180,
                    yStart: 10
                },
                sprites:[]
            },
            reel2:{
                drawing:{
                    xStart: 350,
                    yStart: 10
                },
                sprites:[]
            }
        };
        ReelContainer.winCombos={
                "3CHERRY":{
                    symbols:[
                        "symbol4",
                    ],
                    top:2000,
                    mid:1000,
                    bot:4000,
                },
                "3SEVEN":{
                    symbols:[
                        "symbol3"
                    ],
                    top:150,
                    mid:150,
                    bot:150,
                },
                "SEVENCHERRY":{
                    symbols:[
                        "symbol3",
                        "symbol4",
                    ],
                    top:75,
                    mid:75,
                    bot:75,
                },
                "3BAR":{
                    symbols:[
                        "symbol0",
                    ],
                    top:50,
                    mid:50,
                    bot:50,
                },
                "2BAR":{
                    symbols:[
                        "symbol2",
                    ],
                    top:20,
                    mid:20,
                    bot:20,
                },
                "1BAR":{
                    symbols:[
                        "symbol1",
                    ],
                    top:10,
                    mid:10,
                    bot:10,
                },
                "ANYBAR":{
                    symbols:[
                        "symbol0",
                        "symbol1",
                        "symbol2",
                    ],
                    top:5,
                    mid:5,
                    bot:5,
                }
        };
    }

    static loadAssets(){
        let obj={};
        var bg = 
            './assets/reelContainer.png';
        var assets=[
            './assets/3xBAR.png',
            './assets/BAR.png',
            './assets/2xBAR.png',
            './assets/7.png',
            './assets/Cherry.png',
        ];
        Canvas.loadImage(bg,()=>{
            let bgSprite = Canvas.addSprite(bg);
            Canvas.stageSprite(bgSprite, Canvas.app.stage);
            bgSprite.width=Canvas.app.renderer.view.width;
            bgSprite.height=Canvas.app.renderer.view.height;
            Canvas.loadImage(assets, ReelContainer.createReels);
        });
        return obj;
    }

    static createReels(symbols){
        Object.keys(ReelContainer.reelConfig).forEach(reel=>{
            let rC = Canvas.createContainer();
            rC.x  =  ReelContainer.reelConfig[reel].drawing.xStart;
            symbols.forEach(symbol => {
                ReelContainer.reelConfig[reel].sprites.push(Canvas.addSprite(symbol));
            });

            ReelContainer.reelConfig[reel].sprites.forEach(sprite=>{
                Canvas.stageSprite(sprite,rC);
                sprite.x = 0;
                sprite.y = ReelContainer.reelConfig[reel].drawing.yStart;
                sprite.visible = false;
            });
            ReelContainer.reels.push(new Reel(reel,ReelContainer.reelConfig[reel].sprites));
        });
        return 0;
    }

    static spinReels(){
        ReelContainer.reels.forEach(reel=>{
            reel.spin();
        });
        //ReelContainer.checkWin();
    }

    static checkWin(){
        if(ReelContainer.reels[0].middleSymbol===ReelContainer.winCombos["3CHERRY"].symbols[0]){
            console.log("WIN");
        }

    }
    // //wait 3 seconds
    // static stopReels(){
    //     ReelContainer.reels.forEach(reel =>{
    //         reel.stop();
    //     });
    //     console.table(ReelContainer.reels);
    //     return [];
    // }
}