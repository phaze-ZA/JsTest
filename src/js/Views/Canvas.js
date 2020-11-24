import * as PIXI from 'pixi.js';
import { StageManager } from '../Models/Stage';

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
        StageManager.stage = Canvas.app.stage;
        document.getElementById('reelContainer').appendChild(Canvas.app.view);
        Canvas.app.renderer.backgroundColor="0xFFFFFF";
        Canvas.animationFrame = {
            reel0:"",
            reel1:"",
            reel2:"",
        };
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

    static drawLine(yPos){
        var line = new PIXI.Graphics();
        line.lineStyle(7,0xFF0000,0.9);
        line.position.x = 0;
        line.position.y = yPos;
        line.moveTo(0,yPos);
        line.lineTo(500,yPos);
        return line;
    }

    static addSprite(image,spriteList){
        let sprite =  new PIXI.Sprite(Canvas.app.loader.resources[image].texture);
        spriteList.push(sprite);
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

    static removeSprite(sprite,container){
        container.removeChild(sprite);
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