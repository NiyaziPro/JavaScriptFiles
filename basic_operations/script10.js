let date = new Date();
let hour = date.getHours();

console.log(hour);

if (hour >= 9 && hour <= 11) {
  console.log("Good Morning");
} else if (hour > 11 && hour <= 17) {
  console.log("Good Afternoon");
} else if (hour > 17 && hour <= 21) {
  console.log("Good Evening");
} else if (hour > 21 && hour <= 6) {
  console.log("Good Night");
} else {
  console.error("Error");
}
