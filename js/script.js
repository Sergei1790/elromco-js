// 'use strict'
// var и let
// age = 31;
// console.log(age);

// var age;

// let нельзя исп до обьявления

// function testLet(){
//     let myAgeLet = 31;
// }
// testLet();
// console.log(myAgeLet); // Не видна за пределами функции

// function testVar(){
//     var myAgeVar = 31;
// }
// testVar();
// console.log(myAgeVar); // Не видна за пределами функции

// НО
// if(true){
//     let sizeLet = 31;
// }
// console.log(sizeLet); // Не видна за пределами блока

// if(true){
//     var sizeVar = 31;
// }
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


// console.log('Bart, Lisa, Maggie, Homer, Marge'.replace(/(.*),(.*)$/, "$1 &$2"));

// let number = prompt('input number');
// number > 0 ? alert('1') : alert('Не знаете? “ECMAScript”!')


// let login = prompt('login')
// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' : 'Нет логина'

// alert(message)

 // Get your shorts on - this is an array workout!
	  // ## Array Cardio Day 1
  
	  // Some data we can work with
  
	  // const inventors = [
    //   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    //   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    //   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    //   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    //   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    //   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    //   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    //   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    //   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    //   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    //   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    //   ];
    
    //   const people = [
    //   'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    //   'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    //   'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    //   'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    //   'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    //   ];
      
    //   // Array.prototype.filter()
    //   // 1. Filter the list of inventors for those who were born in the 1500's
    //   const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <=1599) 
    //   console.table(fifteen);
  
    //   // Array.prototype.map()
    //   // 2. Give us an array of the inventors first and last names
  
    //   const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    //   console.log(fullNames);
    
    //   // Array.prototype.sort()
    //   // 3. Sort the inventors by birthdate, oldest to youngest
    //   // const ordered = inventors.sort(function(a,b){
    //   // 	if(a.year > b.year){
    //   // 		return 1;
    //   // 	} else{
    //   // 		return -1;
    //   // 	}
    //   // });
  
    //   const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    //   console.table(ordered);
  
    //   // Array.prototype.reduce()
    //   // 4. How many years did all the inventors live all together?
    //   const totalYears = inventors.reduce((total, inventor) =>{
    //   return total + (inventor.passed - inventor.year);
    //   }, 0)
    //   console.log(totalYears);
      
    //   // 5. Sort the inventors by years lived
    //     const oldest = inventors.sort(function(a,b){
    //     const lastGuy = a.passed - a.year;
    //     const nextGuy = b.passed - b.year;
    //     return lastGuy > nextGuy ? -1 : 1;
    //   });
    //   console.table(oldest);
  
    //   // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    //   // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      
    // //   const category = document.querySelector('.mw-category')
    // // 	const links = Array.from(category.querySelectorAll('a'));
    // // 	const de = links
    // // 					.map(link => link.textContent)
    // // 					.filter(streetName => streetName.includes('de'));
    //   // 7. sort Exercise
    //   // Sort the people alphabetically by last name
    //   const alpha = people.sort((lastOne, nextOne) =>{
    //     const [aLast, aFirst] = lastOne.split(', ');
    //     const [bLast, bFirst] = nextOne.split(', ');
    //     return aLast > bLast ? 1 : -1;
        
    //   })
    //   console.log(alpha);
    //   // 8. Reduce Exercise
    //   // Sum up the instances of each of these
      // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      // const transportation = data.reduce(function(obj, item){
      //   if(!obj[item]){
      //     obj[item] = 0;
      //   }
      //   obj[item]++;
        
      //   return obj;
      // }, {})
      // console.log(transportation);

      // function unique(arr) {
	// 	const str = arr.reduce(function(accum, item){
	// 		if(!accum.includes(item)){
	// 			accum.push(item);
	// 		}
	// 		return accum;
	// 	}, [])
	// 	return str;
	// }

	// let strings = ["кришна", "кришна", "харе", "харе",
	// "харе", "харе", "кришна", "кришна", ":-O"
	// ];


	// console.log( unique(strings) ); // кришна, харе, :-O
  // const people = [
  //   { name: 'Wes', year: 1988 },
  //   { name: 'Kait', year: 1986 },
  //   { name: 'Irv', year: 1970 },
  //   { name: 'Lux', year: 2015 }
  // ];

  // const comments = [
  //   { text: 'Love this!', id: 523423 },
  //   { text: 'Super good', id: 823423 },
  //   { text: 'You are the best', id: 2039842 },
  //   { text: 'Ramen is my fav food ever', id: 123523 },
  //   { text: 'Nice Nice Nice!', id: 542328 }
  // ];

  	// Some and Every Checks
		// Array.prototype.some() // is at least one person 19 or older?
		// const isAdult = people.some(function(person){
		// 	const currentYear = (new Date()).getFullYear();
		// 	if(currentYear - person.year >=19){
		// 		return true;
		// 	}
		// })


		// const isAdult = people.some(person =>{
		// 	const currentYear = (new Date()).getFullYear();
		// 	return currentYear - person.year >=19;
		// })

		// const isAdult = people.some(person => ((new Date())
		// .getFullYear()) - person.year >=19);


		// console.log({isAdult});

		
		// Array.prototype.every() // is everyone 19 or older?
		// const allAdults = people.every(person => ((new Date())
		// .getFullYear()) - person.year >=19);


		// console.log({allAdults});


		// Array.prototype.find()
		// Find is like filter, but instead returns just the one you are looking for
		// find the comment with the ID of 823423

		// const comment = comments.find(function(comment){
		// 	if(comment.id === 823423 ){
		// 		return true
		// 	}
		// });

		// const comment = comments.find(comment => comment.id === 823423);

		// console.log(comment);
	
		// Array.prototype.findIndex()
		// Find the comment with this ID
		// delete the comment with the ID of 823423

		// const index = comments.findIndex(comment => comment.id === 823423);
		// // console.log(index);
		// // comments.splice(index, 1);

		// const newComments = [
		// 	...comments.slice(0, index),
		// 	...comments.slice(index + 1),
		// ];

		// console.table(newComments);

  //   const people = [
  //     {
  //      name: "Carly",
  //      yearOfBirth: 2018,
  //    },
  //    {
  //      name: "Ray",
  //      yearOfBirth: 1962,
  //      yearOfDeath: 1963,
  //    },

  //    {
  //      name: "Jane",
  //      yearOfBirth: 1912,
  //      yearOfDeath: 1941,
  //    },
  //  ]

  //  const findTheOldest = function(arr) {
  //    return arr.reduce(function(oldest, person){
  //      if(person.yearOfDeath == undefined){
  //        person.yearOfDeath = (new Date()).getFullYear();
  //      } 
  //      if(oldest.yearOfDeath == undefined){
  //        oldest.yearOfDeath = (new Date()).getFullYear();
  //      } 
  //      console.log(person.yearOfDeath);
  //      const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
  //      const currentAge = person.yearOfDeath - person.yearOfBirth;
       
       
  //      return (oldestAge < currentAge) ? person : oldest;
  //    })
  //  };
  //   const findTheOldest = function(arr) {
  //     const newArr = arr.reduce(function(oldest, person){
  //         let currentAge = 0;
  //         if(person.yearOfDeath == undefined){
  //             currentAge = (new Date()).getFullYear() - person.yearOfBirth;
  //         } else{
  //             currentAge = person.yearOfDeath - person.yearOfBirth;
  //         }
          
  //         return (oldest.age < currentAge) ? { name: person.name, age: currentAge } : oldest;
  //     }, { name: "", age: 0 })
  //     return newArr;
  // };
//   let guess;
//   let number = Math.floor(Math.random() * 3) + 1;
//   do{
//     guess = prompt('Guess the num');
//     if(guess == null){
//       break;
//     }
//     guess = +guess;
//     if (guess !== number) {
//       alert('You lost!');
//     }
//   } while(guess !== number);
//   if (guess === number) {
//     alert('You won!');
// }

import {PI, getCircumference} from './modules.js';
console.log(getCircumference(2));

function walkDog(){
	return new Promise((resolve, reject) =>{
		setTimeout( () => {
			const done = true;
			if(done){
				resolve('You walk the dog 🐕');
			} else{
				reject('you failed')
			}
		}, 1500);
	});
}
function cleanKitchen(){
	return new Promise((resolve, reject) =>{
		setTimeout( () => {
			const done = false;
			if(done){
				resolve('You cleaned kitchen 🧹');
			} else{
				reject('you failed')
			}
		}, 2500);
	});
}
function takeOutTrash(){
	return new Promise((resolve, reject) =>{
		setTimeout( () => {
			const done = true;
			if(done){
				resolve('You took out trash 🔁');
			} else{
				reject('you failed')
			}
		}, 500);
	});
}

async function doChores(){
	try{
		const walkDogResult = await walkDog();
		console.log(walkDogResult);
		
		const cleanKitchenResult = await cleanKitchen();
		console.log(cleanKitchenResult);
	
		const takeOutTrashResult = await takeOutTrash();
		console.log(takeOutTrashResult);console.log('All done');
	} 
	catch(error){
		console.error(error);
	}

	
}
doChores()

walkDog().then(value => {console.log(value); return cleanKitchen()})
		.then(value => {console.log(value); return takeOutTrash()})
		.then(value => {console.log(value); console.log('done')})
		.catch(error => console.log(error)); 
