//ConsoleModels.ts
//Console
type TButtonStates = "pressed" | "disabled" | "ready";

interface ITextBox {
    id:string,
    value:any,
    [propName:string]:any,
}

interface IButton {
    id:string,
    textValue:string,
    state:TButtonStates,
    press?:Function,
}
