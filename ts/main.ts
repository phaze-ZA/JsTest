var x = new LoadManager();
let symbolMap=x.initGame();

let allReels:Array<Reel>  = createReels(symbolMap);

SpinButton.press=()=> {
    spinReels(allReels);
}