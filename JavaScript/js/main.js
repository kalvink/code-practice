class Animal {

    constructor(name, height, weight) {
        console.log("Created animal named", name);
        this.name = name;
        this.height = height;
        this.weight = weight;

    }

    nameLength() {
        return this.name.length;
    }

}
Animal.planet = "Earth";

var dog = new Animal("Fido", 25, 90);
var fish = new Animal("Goldie", 2, .02);

console.log(dog.constructor.planet);


class Dog extends Animal {
    constructor(name, height, weight, barkVolume, leashColor) {
        super(name, height, weight)
        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
    }

    bark() {
        if (this.barkVolume > 50) {
            console.log(this.name, "barks loudly! (volume:", this.barkVolume, ")");
        } else {
            console.log(this.name, "barks timidly. (volume:", this.barkVolume, ")");
        }
    }


}

class Fish extends Animal {
    constructor(name, height, weight, swimSpeed) {
        super(name, height, weight)
        this.swimSpeed = swimSpeed;
    }

    swim(chaserSpeed) {
        if (this.swimSpeed > 50) {
            console.log(this.name, "swims around quickly! (speed:", this.swimSpeed, ")");
        } else {
            console.log(this.name, "swims around slowly. (speed:", this.swimSpeed, ")");
        }

        if (this.swimSpeed > chaserSpeed) {
            console.log(this.name, "got away.");

        } else {
            console.log(this.name, "got caught.");
        }
    }

}

var king = new Dog("King", 45, 92, 72, "red");
var goldie = new Fish("Goldie", 2, .1, 77);

king.bark();
goldie.swim(king.speed);