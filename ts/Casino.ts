///<reference path="IO.ts"/>

class Casino{

	casinoWelcome() {
		IO.display("Welcome to Uncle Bob's Backyard Casinooooooooo!");
	}

	askForName(){
       let name: string = IO.getStringInput("What is your name semi-attractive person?");
       IO.display(name);
	}

	askForMoney(){
        let money: number = IO.getPositiveNumberInput("How much you puttin' up?");
        IO.display(""+money);
	}
	casinoStart(){
	    this.casinoWelcome();
	    //this.askForName();
        // this.askForMoney();
	}

   // IO.getStringInput("Please say yo name");

}
