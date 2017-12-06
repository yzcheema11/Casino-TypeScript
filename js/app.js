var IO = /** @class */ (function () {
    function IO() {
    }
    IO.display = function (displayString) {
        this.displayEle.innerHTML += "<br/>" + displayString;
    };
    IO.changeButton = function (replaceValue, replaceMethod, replaceVisibility) {
        this.submitButtonEle.value = replaceValue;
        this.submitButtonEle.onclick = replaceMethod;
        if (replaceVisibility) {
            this.submitButtonEle.style = "visibility: visible";
        }
        else {
            this.submitButtonEle.style = "visibility: hidden";
        }
    };
    IO.clear = function () {
        this.displayEle.innerHTML = "";
    };
    IO.getStringInput = function () {
        return this.userInputEle.value;
    };
    IO.getNumberInput = function () {
        var stringInput;
        var numberInput = null;
        do {
            stringInput = this.getStringInput();
            try {
                numberInput = Number(stringInput);
                return numberInput;
            }
            catch (Exception) {
                this.display("Not a valid amount.");
            }
        } while (true);
    };
    IO.getPositiveNumberInput = function () {
        var numberInput;
        do {
            numberInput = this.getNumberInput();
            if (numberInput >= 0) {
                return numberInput;
            }
            else {
                this.display("Please input a positive amount.");
            }
        } while (true);
    };
    IO.displayEle = document.getElementById("display");
    IO.userInputEle = document.getElementById("user_input");
    IO.submitButtonEle = document.getElementById("submit_button");
    return IO;
}());
///<reference path="IO.ts"/>
var Casino = /** @class */ (function () {
    function Casino() {
    }
    Casino.prototype.casinoStart = function () {
        this.casinoWelcome();
    };
    Casino.prototype.casinoWelcome = function () {
        IO.display("Welcome to Uncle Bob's Backyard Casinooooooooo!");
        IO.changeButton("Name plez", "casino.getName()", true);
        IO.display("What is your name semi-attractive person?");
    };
    Casino.prototype.getName = function () {
        this._name = IO.getStringInput();
        if (this._name != null) {
            IO.display(this._name);
            IO.changeButton("", "", false);
        }
    };
    return Casino;
}());
var User = /** @class */ (function () {
    function User(name, money) {
        this._name = name;
        this._money = money;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var MoneyContainer = /** @class */ (function () {
    function MoneyContainer() {
        this._money = 0;
    }
    Object.defineProperty(MoneyContainer.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: true,
        configurable: true
    });
    MoneyContainer.prototype.addMoney = function (money) {
        if (money > 0) {
            this._money += money;
        }
    };
    MoneyContainer.prototype.takeOutMoney = function (money) {
        if (money > 0 && money <= this._money) {
            this._money -= money;
            return money;
        }
        return 0.0;
    };
    MoneyContainer.prototype.takeAllMoney = function () {
        var moneyHolder = this._money;
        this._money = 0.0;
        return moneyHolder;
    };
    return MoneyContainer;
}());
/// <reference path="Casino.ts" />
var casino = new Casino();
casino.casinoStart();
var Deck = /** @class */ (function () {
    function Deck() {
    }
    return Deck;
}());
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());
var Hand = /** @class */ (function () {
    function Hand() {
    }
    return Hand;
}());
var PlayingSuit;
(function (PlayingSuit) {
    PlayingSuit["HEART"] = "\u2661";
    PlayingSuit["DIAMOND"] = "\u2662";
    PlayingSuit["CLUB"] = "\u2667";
    PlayingSuit["SPADE"] = "\u2664";
})(PlayingSuit || (PlayingSuit = {}));
var PlayingValue;
(function (PlayingValue) {
    PlayingValue["TWO"] = "2";
    PlayingValue["THREE"] = "3";
    PlayingValue["FOUR"] = "4";
    PlayingValue["FIVE"] = "5";
    PlayingValue["SIX"] = "6";
    PlayingValue["SEVEN"] = "7";
    PlayingValue["EIGHT"] = "8";
    PlayingValue["NINE"] = "9";
    PlayingValue["TEN"] = "10";
    PlayingValue["JACK"] = "J";
    PlayingValue["QUEEN"] = "Q";
    PlayingValue["KING"] = "K";
    PlayingValue["ACE"] = "A";
})(PlayingValue || (PlayingValue = {}));
//# sourceMappingURL=app.js.map