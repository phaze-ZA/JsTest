import ReelContainer from './ReelContainer';
import {
    PlayerManager
} from '../Models/Player';
export default class Console {
    static init() {
        Console.spinBtn = document.getElementById("spinBtn");
        Console.spinBtn.onclick = this.onSpin;

        Console.debugBtn = document.getElementById("debugMode");
        Console.debugBtn.onclick = this.setDebug;
        Console.fixedMode = document.getElementById("fixedMode");
        Console.fixedMode.onclick = this.setFixedMode;

        Console.reel1Symbol = document.getElementById("reel1Symbol");
        Console.reel2Symbol = document.getElementById("reel2Symbol");
        Console.reel0Symbol = document.getElementById("reel0Symbol");
        Console.reel1Pos = document.getElementById("reel1Pos");
        Console.reel2Pos = document.getElementById("reel2Pos");
        Console.reel0Pos = document.getElementById("reel0Pos");

        Console.winTxt = document.getElementById("winTxt");

        Console.balTxt = document.getElementById("balanceTxt");
        Console.balTxt.value = PlayerManager.balance;
        Console.balTxt.oninput = this.onBalanceChange;
    }

    static setWin(value) {
        PlayerManager.balance += value;
        Console.winTxt.innerText = value;
    }

    static setBalance(value) {
        Console.balTxt.value = value;
    }

    static setDebug() {
        PlayerManager.debugger = !PlayerManager.debugger;
        Console.balTxt.readOnly = !PlayerManager.debugger;
    }

    static setFixedMode() {
        PlayerManager.fixedMode = !PlayerManager.fixedMode;
        Console.reel1Symbol.disabled = !PlayerManager.fixedMode;
        Console.reel2Symbol.disabled = !PlayerManager.fixedMode;
        Console.reel0Symbol.disabled = !PlayerManager.fixedMode;
        Console.reel1Pos.disabled = !PlayerManager.fixedMode;
        Console.reel2Pos.disabled = !PlayerManager.fixedMode;
        Console.reel0Pos.disabled = !PlayerManager.fixedMode;
    }

    static onBalanceChange() {
        PlayerManager.balance = Console.balTxt.value;
        Console.setBalance(PlayerManager.balance);
    }

    static onSpin() {
        let payoutBody = document.getElementById('payoutBody');
        if (PlayerManager.canPlayerSpin()) {
            for(var i=0;i<payoutBody.children.length;i++){
                payoutBody.children[i].style.backgroundColor = "#0c0c0c";
            }
            Console.winTxt.innerText = 0;
            PlayerManager.balance--;
            Console.spinBtn.disabled = true;
            Console.setBalance(PlayerManager.balance);
            if (PlayerManager.fixedMode === true) {
                let spinResults = {
                    reel0: {
                        pos: Console.reel0Pos.value,
                        symbol: Console.reel0Symbol.value,
                    },
                    reel1: {
                        pos: Console.reel1Pos.value,
                        symbol: Console.reel1Symbol.value,
                    },
                    reel2: {
                        pos: Console.reel2Pos.value,
                        symbol: Console.reel2Symbol.value,
                    },
                };
                ReelContainer.spinReels(spinResults);
            } else {
                ReelContainer.spinReels();
            }
            setTimeout(() => {
                Console.onStop();
            }, PlayerManager.spinDelay);
        }
    }

    static onStop() {
        let winObj = ReelContainer.stopReels();
        Console.spinBtn.disabled = false;
        Console.setWin(winObj.value);
        Console.setBalance(PlayerManager.balance);

        for (let i = 0; i < winObj.idList.length; i++) {
            const winId = winObj.idList[i];
            if(winId!==''){
                let winElement = document.getElementById(winId);
                winElement.style.backgroundColor = "#7b7b7b";    
            } 
        }

    }
}