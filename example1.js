const animalMethods = {
	eat: function (amount) {
		console.log(`${this.name} is eating`);
		this.energy += amount;
	},
	sleep: function (length) {
		console.log(`${this.name} is sleeping`);
		this.energy += length;
	},
	play: function (length) {
		console.log(`${this.name} is playing`);
		this.energy -= length;
	}
}

function Animal (name, energy) {
	let animal = {}
	animal.name = name;
	animal.energy = energy;
	animal.eat = animalMethods.eat;
	animal.sleep = animalMethods.sleep;
	animal.play = animalMethods.play;

	return animal;
}

const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);

leo.eat(5);
leo.play(3);
console.log(`Leo's energy: ${leo.energy}`);