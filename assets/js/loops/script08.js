let randomNum = Math.floor(Math.random() * 100) + 1; // random number creating between 1-100
let number;
let count = 0;

do {
  count++;
  number = prompt("Enter your number between 1-100...");
  if (number > randomNum) {
    alert("Daha kucuk sayi girin");
  } else if (number < randomNum) {
    alert("Daha buyuk sayi girin");
  } else {
    alert("Bingooooo! You guessed it in " + count + " tries");
  }
} while (number != randomNum);
