import Canvas from './Views/Canvas';
import ReelContainer from "./Views/ReelContainer";
import Console from './Views/Console';

export class SlotGame {
    static init(){
        Canvas.init();
        Console.init();
        ReelContainer.init();
    }
}

SlotGame.init();