///<reference path="IO.ts"/>

class Casino{

    private _name: string;
    private _money: number;

    casinoStart(){
        this.casinoWelcome();
    }

	casinoWelcome() {
		IO.display("Welcome to Uncle Bob's Backyard Casinooooooooo!");
        IO.changeButton("Name plez", "casino.getName()", true);
        IO.display("What is your name semi-attractive person?");
	}

	getName(): void{
       this._name = IO.getStringInput();
       if(this._name != null) {
           IO.display(this._name);
           IO.changeButton("", "", false);
       }
	}

	// askForMoney(): number{
     //    let money: number = IO.getPositiveNumberInput("How much you puttin' up?");
     //    IO.display(""+money);money = this.askForMoney();
     //    if(money != null) {
     //        IO.changeButton("");
     //        document.getElementById("userName").innerHTML = name;
     //        document.getElementById("userMoney").innerHTML = ""+money;
     //    }
     //    return money;
	// }

   // IO.getStringInput("Please say yo name");

}

class User {

    private _name: string;
    private _money: number;

    constructor(name: string, money: number){
        this._name = name;
        this._money = money;
    }

    get name(): string {
        return this._name;
    }

    get money(): number {
        return this._money;
    }
}

class MoneyContainer {

    private _money: number = 0;

    get money(): number {
        return this._money;
    }

    public addMoney(money: number): void {
        if (money>0) {
        this._money += money;
        }
    }

    public takeOutMoney(money: number): number{
        if (money > 0 && money <= this._money){
            this._money -= money;
            return money;
        }
        return 0.0;
    }

    public takeAllMoney(): number{
        let moneyHolder: number = this._money;
        this._money=0.0;
        return moneyHolder;
    }
}
