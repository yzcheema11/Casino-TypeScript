///<reference path="IO.ts"/>

class Casino{

	start() {
		this.displayEle.innerHTML += "<br/>";
		if(this.userInputEle.value.toLowerCase() == "bob" || this.userInputEle.value.toLowerCase() == "alice"){
			this.displayEle.innerHTML += "Greetings, " + this.userInputEle.value + "!" ;
		}else{
			this.displayEle.innerHTML +=  this.userInputEle.value + "? " + "Stranger Danger!!!";
		}
		this.displayEle.innerHTML += "<br/><br/>";
		this.askForName();
	}

	askForName(){
		this.displayEle.innerHTML += "What is your name?"
	}
}
