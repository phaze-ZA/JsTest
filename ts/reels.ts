//reels.ts
//create 3 reels
type TSymbolTypes =  'symbol0' | 'symbol1' | 'symbol2' | 'symbol3' | 'symbol4';

class ReelSymbol{
    id:string;
    reelId:number;
    img:HTMLImageElement;
    
    constructor(reelid,symbolid:TSymbolTypes, context:CanvasRenderingContext2D,symbolMap){
        this.id=symbolid;
        this.reelId=reelid;
        this.img = symbolMap[this.id];
        this.img.addEventListener('load',()=>{
            context.drawImage(this.img, 0, (Object.keys(symbolMap).indexOf(this.id)*150),121,105);
        },false);
    }
}


function createReels(reelSymbolMap):Array<Reel>{
    let canvas:HTMLCanvasElement;
    let context:CanvasRenderingContext2D;
    let reels:Array<Reel> =[];
    let reelSymbols:Array<ReelSymbol>=[];
    for(let reelNo=0; reelNo<3; reelNo++){
        canvas = document.getElementById(`reel${reelNo}`) as HTMLCanvasElement;
        context= canvas.getContext("2d");
        Object.keys(reelSymbolMap).forEach((symbol:TSymbolTypes)=>{
           reelSymbols.push(new ReelSymbol(reelNo,symbol,context,reelSymbolMap));
        })
        reels.push(new Reel(reelNo,reelSymbols));
    }
    return reels;
}

function spinReels(reels:Array<Reel>):void{
    reels.forEach(reel => {
        reel.spin();
    });
    setTimeout(() => {
        stopReels(reels);
    }, 2000);
}
//wait 3 seconds
function stopReels(reels:Array<Reel>):Array<number> {
    reels.forEach(reel =>{
        reel.stop();
    });
    console.table(reels);
    return [];
}