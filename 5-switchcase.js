/**
 * switch(variabel){
 *  case target:
 *      target == variabel
 *  case target2:
 *      target2 == variabel
 *  default:
 *      apabila tidak ada target yang tercapai
 * }
 */
const tempUnit = "C";
switch (tempUnit) {
  case "C":
    console.log("Celcius");
    break;
  case "R":
    console.log("Reamur");
    break;
  case "F":
    console.log("Fahrenheit");
    break;
  case "K":
    console.log("Kelvin");
    break;
  default:
    console.log("invalid unit");
}

const score = 79;
if (score >= 0 && score <= 100) {
  switch (true) {
    case score >= 80:
      // score >= 80 == true
      console.log("A");
      break;
    case score >= 60:
      console.log("B");
      break;
    default:
      console.log("C");
  }
} else {
  console.log("invalid score");
}
