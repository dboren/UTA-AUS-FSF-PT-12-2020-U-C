// TODO: Import the parent class
const vehicle = require(Vehicle);

// TODO: Create a `Car` class that extends the `Vehicle` class

class Car extends Vehicle {
  constructor(id, numberOfWheels, sound) {
    
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
