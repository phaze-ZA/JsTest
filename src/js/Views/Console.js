import ReelContainer from './ReelContainer';
import {
    PlayerManager
} from '../Models/Player';
export default class Console {
    static init() {
        Console.spinBtn = document.getElementById("spinBtn");
        Console.spinBtn.onclick = this.onSpin;

        Console.winTxt = document.getElementById("winTxt");

        Console.balTxt = document.getElementById("balanceTxt");
        Console.balTxt.innerText = PlayerManager.balance;

    }

    static setWin(value) {
        PlayerManager.balance += value;
        Console.winTxt.innerText = value;
    }

    static setBalance(value) {
        Console.balTxt.innerText = value;
    }

    static onSpin() {
        if (PlayerManager.canPlayerSpin()) {
            PlayerManager.balance--;
            Console.spinBtn.disabled=true;
            Console.setBalance(PlayerManager.balance);
            ReelContainer.spinReels();
            setTimeout(() => {
                Console.onStop();
            }, PlayerManager.spinDelay);
        }
    }

    static onStop() {
        Console.spinBtn.disabled = false;
        if(ReelContainer.stopReels()===true){
            Console.setWin(50);
            Console.setBalance(PlayerManager.balance);
        }
    }
}