import * as PIXI from 'pixi.js';

export default class Canvas{
    static init(){
        Canvas.app = new PIXI.Application({
            width: 500, 
            height: 300,
        });
        Canvas.app.renderer.view.style.position = "fixed";
        Canvas.app.renderer.view.style.display = "block";
        Canvas.app.renderer.autoResize = true;
        Canvas.app.renderer.backgroundColor="0x0c0c0c";
        // window.addEventListener("resize",()=>{
        //     Canvas.app.renderer.resize(window.innerWidth, window.innerHeight*0.5);
        // });
        document.getElementById('reelContainer').appendChild(Canvas.app.view);
        Canvas.app.renderer.backgroundColor="0xFFFFFF";
        Canvas.spriteList=[];
    }

    static loadImage(images,callback){
        Canvas.app.loader.add(images).load(()=>callback(images));
    }

    static setup(images){
        Canvas.spriteList = [];
        images.forEach(image => {
            Canvas.spriteList.push(
                new PIXI.Sprite(
                    Canvas.app.loader.resources[image].texture)
            );
        });
    }

    static addSprite(image){
        let sprite =  new PIXI.Sprite(Canvas.app.loader.resources[image].texture);
        Canvas.spriteList.push(sprite);
        return sprite;
    }

    static createContainer(){
        let container = new PIXI.Container();
        Canvas.app.stage.addChild(container);
        return container;
    }

    static stageSprite(sprite,container){
        container.addChild(sprite);
        container.visible = true;
    }

    static drawImg(img,x,y,w,h){
        img.addEventListener('load',()=>{
            Canvas.context.drawImage(img,x,y,w,h);
        },false);
        Canvas.context.drawImage(img,x,y,w,h);
    }

    static clearCanvas(){
        Canvas.context.clearRect(0,0,Canvas.width,Canvas.height);
    }
}