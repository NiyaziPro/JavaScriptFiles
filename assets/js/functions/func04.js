function gradeDetermination(grade) {
  if (grade >= 90 && grade <= 100) {
    console.log("A");
  } else if (grade >= 80 && grade < 90) {
    console.log("B");
  } else if (grade >= 70 && grade < 80) {
    console.log("C");
  } else if (grade >= 50 && grade < 70) {
    console.log("D");
  } else if (grade >= 0 && grade < 50) {
    console.log("F");
  } else {
    console.log("Invalid data!");
  }
}


gradeDetermination(99.99)
