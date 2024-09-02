"use strict";
class actemp {
    constructor(t) {
        this._temp = t;
    }
    get gettemp() {
        return this._temp;
    }
    set settemp(newtemp) {
        if (newtemp < 25) {
            console.log("bill ayga");
        }
        console.log(newtemp);
    }
}
const temp = new actemp(25);
console.log(temp);
console.log(temp.gettemp);
temp.settemp = 16;
//////polymorphisam new topic method overriding
//poly =many
//morphisam = forms
class animal {
    constructor(n) {
        this.name = n;
    }
    makesound() {
        console.log("animal making sound");
    }
}
class Lion extends animal {
    constructor(name, king) {
        super(name);
        this.isking = king;
    }
    makesound() {
        console.log("lion is roaring");
    }
}
const lion = new Lion("sheruu", true);
lion.makesound();
//////abstraction 
class laptop {
    constructor(ram, screen) {
        this.ram = ram;
        this.screen = screen;
    }
}
class lenovo extends laptop {
    constructor(ram, screen) {
        super(ram, screen);
    }
    ssd() {
        console.log("1tb");
    }
}
const mylenovo = new lenovo("16gb", 24);
console.log(mylenovo);
