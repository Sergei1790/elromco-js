'use strict'
// var и let
age = 31;
// console.log(age);

var age;

// let нельзя исп до обьявления

function testLet(){
    let myAgeLet = 31;
}
testLet();
// console.log(myAgeLet); // Не видна за пределами функции

function testVar(){
    var myAgeVar = 31;
}
testVar();
// console.log(myAgeVar); // Не видна за пределами функции

// НО
if(true){
    let sizeLet = 31;
}
// console.log(sizeLet); // Не видна за пределами блока

if(true){
    var sizeVar = 31;
}
// console.log(sizeVar); // Видна за пределами блока


// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);


// let calculator = {
//     read() {
//         this.key1 = prompt("Введите 1 число");
//         this.key2 = prompt("Введите 2 число")
//     },
//     sum() {
//         return +this.key1 + this.key2;
//     },
//     mul(){
//         return this.key1 * this.key2;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

  // function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }
// let user = new User("Вася");
// let user1 = new User("Коля");
// alert(user1.name);


// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         this.a = +prompt("Введите число");
//         this.value += this.a;
//     }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);



// let arr ='aa, ss, fff-www. fff'
// console.log(arr.split(/[\s,.-]+/));


// function digital_root(n) {
//     let digits = n.toString(),
//         sum = 0;
//     if (digits.length === 1){
//         sum = n;
//         return sum;
//     }
//     for (let i = 0; i < digits.length; i++){
//         sum += +digits[i];
//     }
//     return digital_root(sum);
// }
// console.log(digital_root(582));

// function toCamelCase(str){
//     str = str.split(/[-_,.]+/);
//     return str = str[0] + str.slice(1).map(item => item[0].toUpperCase() + item.slice(1)).join('');

//     // let result = str.split(/[-_,.]+/);
//     // return result = result[0] + result.slice(1).map(item => item[0].toUpperCase() + item.slice(1)).join('');
// }
// console.log(toCamelCase('the-stealth-warrior'));

// function list(names){
//     let result;
//     if(names.length > 2){
//         let lastElem = names.map(e => e.name).join(", ");
//         let pos = lastElem.lastIndexOf(',');
//         result = lastElem.substring(0, pos) + ' &' + lastElem.substring(pos + 1);
//         console.log(lastElem.substring(pos + 1));
//     } else if(names.length == 2){
//         result = names.map(e => e.name).join(" & ");
//     } else{
//         result = names.map(e => e.name).toString();
//     }
//     return result;
// }
// var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'} ]))


console.log('Bart, Lisa, Maggie, Homer, Marge'.replace(/(.*),(.*)$/, "$1 &$2"));

// let number = prompt('input number');
// number > 0 ? alert('1') : alert('Не знаете? “ECMAScript”!')


let login = prompt('login')
let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' : 'Нет логина'

alert(message)