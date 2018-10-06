function Animal (name, energy) {
	this.name = name;
	this.energy = energy;
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};


const leo = new Animal('Leo', 7);
const snoop = new Animal('Snoop', 10);

snoop.eat(5);
snoop.play(3);
console.log(`SnoopNew's energy: ${snoop.energy}`);

class Person {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  }

  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  }

  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  }
}

const leo = new Person('Joe', 7);
const snoop = new Person('Jack', 10);