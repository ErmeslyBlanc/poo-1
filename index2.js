console.log("Iniciando")


// Create an Object
const car = {
  firstName: "Tracker",
  lastName: "2025",
  age: 2023,
  eyeColor: "Cinza"
};


const car2 = {
  firstName: "Fiat",
  lastName: "Uno",
  age: 2023,
  eyeColor: "Vermelho"
};


const car3 = {
  firstName: "Mobi",
  lastName: "Auto",
  age: 2023,
  eyeColor: "Vermelho"
};


// Create new Object
const caracteristicas = Object.create(car);
caracteristicas.firstName = "2025"; caracteristicas.lastName = "..."

console.log(car.firstName + caracteristicas.firstName + caracteristicas.lastName)