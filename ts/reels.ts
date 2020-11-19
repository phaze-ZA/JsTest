//create 3 reels
function createReels():Array<Reel>{
    let reels:Array<Reel> =[];
    for(let reelNo=0; reelNo<3; reelNo++){
        reels.push(new Reel(reelNo));
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