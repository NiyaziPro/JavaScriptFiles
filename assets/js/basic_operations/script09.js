let salary = Number(prompt("Enter your Salary"));

if (salary >= 1000 && salary <= 2000) {
  salary = salary * 1.3;
  alert("Your new salary is : " + salary);
} else if (salary > 2000 && salary <= 4000) {
  salary = salary * 1.15;
  alert("Your new salary is : " + salary);
} else if (salary > 2000) {
  salary = salary * 1.05;
  alert("Your new salary is : " + salary);
} else {
  alert("Invalid data!");
}
