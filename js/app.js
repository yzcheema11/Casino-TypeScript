var Casino = /** @class */ (function () {
    function Casino() {
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    Casino.prototype.init = function () {
        this.askForName();
    };
    Casino.prototype.start = function () {
        this.displayEle.innerHTML += "<br/>";
        if (this.userInputEle.value.toLowerCase() == "bob" || this.userInputEle.value.toLowerCase() == "alice") {
            this.displayEle.innerHTML += "Greetings, " + this.userInputEle.value + "!";
        }
        else {
            this.displayEle.innerHTML += this.userInputEle.value + "? " + "Stranger Danger!!!";
        }
        this.displayEle.innerHTML += "<br/><br/>";
        this.askForName();
    };
    Casino.prototype.askForName = function () {
        this.displayEle.innerHTML += "What is your name?";
    };
    return Casino;
}());
/// <reference path="Casino.ts" />
var casino = new Casino();
//# sourceMappingURL=app.js.map