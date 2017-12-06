class IO {

    static displayEle:any = document.getElementById("display");
    static userInputEle:any = document.getElementById("user_input");
    static submitButtonEle:any = document.getElementById("submit_button");

    public static display(displayString: string): void {
        this.displayEle.innerHTML += "<br/>"+displayString;
    }

    public static changeButton(replaceValue?: string, replaceMethod?: string, replaceVisibility?: boolean): void{
        this.submitButtonEle.value = replaceValue;
        this.submitButtonEle.onclick = replaceMethod;
        if(replaceVisibility){
            this.submitButtonEle.style = "visibility: visible";
        } else {
            this.submitButtonEle.style = "visibility: hidden";
        }
    }

    public static clear():void {
        this.displayEle.innerHTML = "";
    }

    public static getStringInput(): string{
        return this.userInputEle.value;
    }

    public static getNumberInput(): number{
        let stringInput: string;
        let numberInput: number = null;
        do {
            stringInput = this.getStringInput();
            try {
                numberInput = Number(stringInput);
                return numberInput;
            } catch (Exception) {
                this.display("Not a valid amount.");
            }
        } while (true);
    }

    public static getPositiveNumberInput(): number{
        let numberInput: number;
        do {
            numberInput = this.getNumberInput();
            if (numberInput >= 0){
                return numberInput;
            } else {
                this.display("Please input a positive amount.");
            }
        } while (true);
    }

    // public static PlayingValue getPlayingValue(String prompt){
    //     PlayingValue value = null;
    //     String stringInput = "";
    //     do {
    //         stringInput = getStringInput(prompt);
    //
    //         for (PlayingValue pv :
    //             PlayingValue.values()) {
    //             if ((pv.getValue()).equalsIgnoreCase(stringInput)) {
    //                 value = pv;
    //             }
    //         }
    //         if(value != null){
    //             break;
    //         }
    //         System.out.println("Not a valid value.");
    //     } while (true);
    //     return value;
    // }
}