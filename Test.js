console.log("Gobi");
var myname = "Gobi Rajendiran";
myname = 123;
console.log(myname);

var sum = 12 + 2;
console.log(sum);
var my = 11 % 3;
console.log(my);

var lastNameLength = "3";
var lastNmae = "gobijgsibfgaibdoighaisob";

lastNameLength = lastNameLength.length;

console.log(lastNameLength);

var bracket = "first letter to show";

var nota = "";

nota = bracket[4];

console.log(nota);

var new1 = bracket[2];
console.log(new1);

var nota = lastNmae[lastNmae.length - 3];

console.log(nota);

function blanksWord(myNoun, myAdjective, myVerb, myAdverb) {
  var result = 6;
  result += "my" + " " + myNoun + " " + myVerb;

  return result;
}

console.log(blanksWord("dag", "big", "ran", "quickly"));

function invitation(name, area, mobilenumber) {
  var cibi = "";
  cibi +=
    "Dear " +
    name +
    "we are happy to invite you from your place " +
    area +
    "thankyou for comming shall i call your number " +
    mobilenumber +
    "at any time";

  return cibi;
}

console.log(invitation("moni", "T.gode", "123456"));
console.log(invitation("yona", "Tiruchengode", "1234567890"));
console.log(invitation("cibi", "sankari", "123"));

function minusseven(num) {
  return num - 7;
}
console.log(minusseven(100));
var sum = 0;
function addthree() {
  sum += 3;
}

function addfive() {
  sum += 5;
}

console.log(addthree);
console.log(addfive);

var changed = 0;
function change(num) {
  return (num + 5) / 3;
}

console.log(changed);
console.log(change(10));
function nextline(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testarray = [1, 2, 3, 4, 5];
console.log(testarray);
console.log(nextline(testarray, 6));
console.log(testarray);

function trueOrFlase(isittrue) {
  if (isittrue) {
    return "Yes, that was true";
  }
  return "no, that was false";
}
console.log(trueOrFlase(true));

function testEqual(salary) {
  if (salary === 12) {
    return "equal";
  }
  return "not Equal";
}
console.log(testEqual(12));

function testElseIf(val) {
  if (val > 10) {
    return "Greater that 10";
  } else if (val < 5) {
    return "smaller that 5";
  } else {
    return "Between 5 to 10";
  }
}

console.log(testElseIf(40));

function switchStatement(val1) {
  var answer;
  switch (val1) {
    case 1:
      answer = "Gobi1";
      break;
    case 2:
      answer = "gobi2";
      break;
    case 3:
      answer = "gobi3";
      break;
    case 4:
      answer = "gobi4";
      break;
  }
  return answer;
}

console.log(switchStatement(2));

var count = 0;
function cc(card) {
  return "change Me";
}

cc(2);
cc(3);
cc(2);
cc(2);
cc(2);

function gobi5(value) {
  switch (key) {
    case value:
      break;
    default:
      break;
  }
}

var testObj = {
  hat: "ballcap",
  shirt: 6,
  shoes: "cleats",
};
testObj.hat = "ball";

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);

var playerName = 6;
var player = testObj[playerName];

console.log(player);

function lookupTest(value1) {
  var result1;
  var lookup = {
    Raja: "Jaya",
    cibi: "Moni",
    Prabhu: "Suseela",
    gobi: "single",
    yona: "breakup",
  };
  result1 = lookup[value1];

  return result1;
}
console.log(lookupTest("cibi"));

function name23(gobiiir) {
  val cibi123 
   switch (gobiiir) {
    case : 
      
      break;
   
    default:
      break;
   }
}