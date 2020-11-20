class LoadManager {

    initGame():Object{
        let symbolMap={};
        symbolMap = this.loadAssets();
        return symbolMap;
    }

    private loadAssets():Object{
        let obj={};
        let assetsMap={
            'symbol0':'./assets/3xBAR.png',
            'symbol1':'./assets/BAR.png',
            'symbol2':'./assets/2xBAR.png',
            'symbol3':'./assets/7.png',
            'symbol4':'./assets/Cherry.png',
        };
        Object.keys(assetsMap).forEach(image => {
            let img = new Image();
            img.src = assetsMap[image];
            obj[image]=img;
        });
        return obj;
    }
}
