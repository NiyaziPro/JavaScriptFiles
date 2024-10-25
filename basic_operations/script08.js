let height = Number(prompt("Enter your height ...cm"));
const weight = Number(prompt("Enter your weight ...kg"));

height = height / 100; //meter
const bodyMassIndex = weight / height ** 2;
console.log(bodyMassIndex);

if (bodyMassIndex >= 18.5 && bodyMassIndex <= 25) {
  alert(weight + "kg is the ideal weight.");
} else {
  alert(weight + "kg is not ideal weight.");
};
