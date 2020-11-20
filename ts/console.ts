var BalanceBox:ITextBox={
    id:'balanceBox',
    value:1000,
    update(value:number){
        if(value>0&&value<5001){
            this.value=value;
        }
    }
}

var SpinButton:IButton = {
    id:'spinButton',
    state:"ready",
    textValue:'spin',
}
