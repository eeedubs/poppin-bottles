// for every two empty bottles, you can get one free (full) bottle of pop
// for every four bottle caps, you can get one free (full) bootle of pop
// each bottle of pop costs $2 to purchase

var payCash = function (investment){
  var bottles = Math.floor(investment / 2);
  return bottles;
}
payCash(44);

var payEmpty = function (empties){
  var bottles = empties / 2;
  return bottles;
}

var payCaps = function (caps){
  var bottles = caps / 4;
  return bottles;
}

var parseCash = function () {
  var investment = process.argv[2];
  var bottles = Math.floor(investment / 2);
  console.log(bottles);
}
//parseCash();

var breakdown = function (input){
  var bottles = payCash(input);
  var leftBottles = bottles % 2;
  var leftCaps = bottles % 4;
  var empties = Math.floor(bottles / 2);
  var caps = Math.floor(bottles / 4);
  console.log("TOTAL BOTTLES: " + bottles + "\n"
    + "REMAINING BOTTLES: " + leftBottles + "\n"
    + "REMAINING CAPS: " + leftCaps + "\n"
    + "TOTAL EARNED:" + "\n"
    + "   BOTTLES: " + empties + "\n" + "   CAPS: " + caps);
}
breakdown(150);