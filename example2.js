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
	},
	poop: function () {
		console.log(`${this.name} is pooping`);
	}
}

function Animal (name, energy) {
	let animal = Object.create(animalMethods); 
	animal.name = name;
	animal.energy = energy;

	return animal;
}

const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);

leo.eat(5);
leo.play(3);
leo.poop();
console.log(`Leo's energy: ${leo.energy}`);