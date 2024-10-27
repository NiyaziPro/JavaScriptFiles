let name = String(prompt("Enter your name"));

if (name.length > 2 && name.length < 50) {
  alert("Hello " + name);
} else {
  console.error("Invalid Name !!!");
}
