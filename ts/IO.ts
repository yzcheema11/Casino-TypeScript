class IO {

    static displayEle:any = document.getElementById("display");
    static userInputEle:any = document.getElementById("user_input");

    public static display(displayString: string): void {
        this.displayEle.innerHTML += "<br/>"+displayString;
    }

    public static clear():void {
        this.displayEle.innerHTML = "";
    }

    public static getStringInput(prompt: string): string{
        this.display(prompt);
        return this.userInputEle.value;
    }

    public static getNumberInput(prompt: string): number{
        let stringInput: string;
        let numberInput: number = null;
        do {
            stringInput = this.getStringInput(prompt);
            try {
                numberInput = Number(stringInput);
                return numberInput;
            } catch (IllegalArgumentException) {
                this.display("Not a valid amount.");
            }
        } while (true);
    }

    public static getPositiveNumberInput(prompt: string): number{
        let numberInput: number;
        do {
            numberInput = this.getNumberInput(prompt);
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