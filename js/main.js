var reelsetConfig = [
    'symbol0',
    'symbol1',
    'symbol2',
    'symbol3',
    'symbol4',
];

var reelContainer = document.getElementById('reelContainer');
//create 3 reels
for(let reelNo=0; reelNo<3; reelNo++){
    const reel = createElement(`reel${reelNo}`, 'reel');
    createReel(reel);
    reelContainer.appendChild(reel);
}

//create reel to contain symbols - takes nodet as parameter
function createReel(reel) { 
    for (let index = 0; index < reelsetConfig.length; index++) {
        //create symbols
        const symbol = createElement(reelsetConfig[index],'block');
        reel.appendChild(symbol);
    }
}

//utility
//Creates a node and returns it, takes id and class as strings - divs only for now
function createElement(id, className){
        var element = document.createElement('div');
        element.id=id;
        element.className=className;
        return element;
}




