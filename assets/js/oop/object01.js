const car = {
brand:"Audi",
model: "RS6",
engine:"petrol",
horsePower: 630,
type: "Avant"
}

console.log(car);
console.log(car.horsePower);

car.engine = "gasoline";
console.log(car);

car.engine = "petrol";
console.log(car);

car.type = "sedan";
console.log(car);

