function Animal (name, energy) {
	let animal = Object.create(Animal.prototype); 
	animal.name = name;
	animal.energy = energy;

	return animal;
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

function AnimalWithNew (name, energy) {
	// let this = Object.create(AnimalWithNew.prototype);
	this.name = name;
	this.energy = energy;

	// return this;
}

AnimalWithNew.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

AnimalWithNew.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

AnimalWithNew.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};


const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);

leo.eat(5);
leo.play(3);
console.log(`Leo's energy: ${leo.energy}`);

const leoNew = new AnimalWithNew('Leo', 7);
const snoopNew = new AnimalWithNew('Snoop', 10);

snoopNew.eat(5);
snoopNew.play(3);
console.log(`SnoopNew's energy: ${snoopNew.energy}`);