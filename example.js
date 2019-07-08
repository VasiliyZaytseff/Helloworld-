//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Замыкание

///////////1 пример
function numberGenerator() {
  // Локальная «свободная» переменная, которая доступна только в замыкании
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2



///////////2 пример 
function sayHello() {
  var say = function() { console.log(hello); }
  // Локальная переменная, которая доступна только в замыкании
  var hello = 'Hello, world!';
  return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’


//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Сравнение объектов
///////////Сравнение ==
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// оба false, кроме очень редких случаев
console.log(obj == null);
console.log(obj == undefined);



///////////Сравнение ===(строгое равенство)
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false



///////////Сравнение с помощью библиотеки Underscore.js
//isEqual
var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;
=> false
_.isEqual(stooge, clone);
=> true