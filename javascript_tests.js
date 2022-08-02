let season = 'YO';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}
  
  else {
  console.log('Invalid season - ELSE IF.');
}

switch (season) {
    case 'spring':
        console.log('It\'s spring! The trees are budding!');
        break;
    case 'winter':
        console.log('It\'s winter! Everything is covered in snow.');
        break;
    case 'fall':
        console.log('It\'s fall! Leaves are falling!');
        break;
    case 'summer':
        console.log('It\'s sunny and warm because it\'s summer!');
        break;
    default:
        console.log('Invalid season - SWITCH.');
        break;
}

let userName = 'Jane'

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'what will I be when I grow up?'

console.log(`${userName}, ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(`${randomNumber}`);

/* Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8.

Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor(). */

let eightBall = ''

switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1: 
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3: 
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6: 
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;
  default:
    console.log('ERROR - NO RANDOM NUMBER ASSIGNED');
    break;
}

//add new line to console output = \n like below...

console.log('\nJavaScript Foundations: Race Day Activity')

let raceNumber = Math.floor(Math.random() * 1000);
console.log(`Random Race Number: ${raceNumber}`);

/*Create a variable that indicates whether a runner registered early or not. 
Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.*/

let registeredEarly = false;

/*Create a variable for the runner's age and set it equal to a number.
You'll change this later as you test different runner conditions.*/

const age = 19;

/*Create a control flow statement that checks whether the runner is an adult AND registered early. 
Add 1000 to their raceNumber if this is true*/

if (registeredEarly && age > 18) {
  console.log(raceNumber += 1000);
}

if (registeredEarly && age > 18) {
  console.log(`Race will begin at 9:30am, your race number is: ${raceNumber}.`);
}
else if(!registeredEarly && age > 18) {
  console.log(`Race will begin at 11:30am, your race number is: ${raceNumber}.`);
}

if(age < 18) {
  console.log(`Race will begin at 12:30pm, your race number is: ${raceNumber}.`);
}

if (age == 18 && registeredEarly) {
  console.log('Please see the registration desk.');
}

if (age == 18 && !registeredEarly) {
  console.log('Please see the registration desk.');
}



//else-if statement vs Ternary operator - does the same thing

let walkSignal = 'Walk'; 

if (walkSignal === 'Walk') {
  console.log('You may walk!');
} else {
  console.log('Do not walk!');
}

walkSignal === 'Walk' ? console.log('You may walk!\n') : console.log('Do not walk!\n');

//Which of the following variables contains a truthy value? Answer: varOne

let varFour = '';
let varThree = 0;
let varTwo = false;
let varOne = 'false';

console.log(`varFour is empty string: ${varFour}`);
console.log(`varThree is number zero: ${varThree}`);
console.log(`varTwo is boolean false: ${varTwo}`);
console.log(`varOne is string called false: ${varOne}\n`);

if (varFour) {
  console.log(`varFour is Truthy`);
} else {
  console.log('varFour is Falsy');
}

if (varThree) {
  console.log(`varThree is Truthy`);
} else {
  console.log('varThree is Falsy');
}

if (varTwo) {
  console.log(`varTwo is Truthy`);
} else {
  console.log('varTwo is Falsy');
}

if (varOne) {
  console.log(`varOne is Truthy\n`);
} else {
  console.log('varOne is Falsy');
}

//FUNCTIONS

function greetWorld() {
  console.log(`Hello, World!`);
}

function getReminder() {
  console.log(`Water the plants.`);
}

function greetInSpanish() {
  console.log(`Buenas Tardes.`);
}

//calling functions 
greetWorld();
getReminder();
greetInSpanish();
greetWorld();
getReminder();
greetInSpanish();

//Parameters and Arguments

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

//Default parameters

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs', item4){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
  console.log(`Remember to buy ${item4}`);
}

makeShoppingList()
makeShoppingList('Soap', 'Cereal', 'Ice')

//Return statement

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//Helper Functions 

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);


//Function Expressions - since Es6 it is common practice to use const as the keyword to declare the variable

const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
  
};

plantNeedsWater('Wednesday');
console.log(plantNeedsWater('Wednesday'));

//Arrow functions

const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater2('Tuesday'));

//Concise body arrow functions

const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;


//Blocks and Scope

const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());

var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//Arrays - using functions to mutate arrays
console.log('\nArrays!!! Let\'s fucking do this!!')

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'danny';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);

console.log(concept);

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];
console.log(target);

//Loops
console.log('\nLoops!!! Let\'s fucking do this!!')

for (let counter = 5; counter < 11; counter++){
  console.log(counter);
}

console.log('\nLooping in Reverse');

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

console.log('\nLooping through arrays:');

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];

for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

console.log('\n');
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

console.log('\nNested Loops:');

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

let bobsFollowers = ['Rivers Cuomo', 'Brian Bell', 'Patrick Wilson', 'Scott Sharp'];
let tinasFollowers = ['Rivers Cuomo', 'Brian Bell', 'Kurt Cobain'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] == tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
      console.log(mutualFollowers)
    }
  }
};

console.log('\nWhile Loop:')
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

let cupsOfSugarNeeded = 5
let cupsAdded = 0

do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);


console.log('\nBreak Keyword in loops:');

for (let i = 0; i < 99; i++) {
  if (i > 3) {
    break;
  }
  console.log('Banana.');
}
console.log('Orange you glad I broke out the loop!');

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Jay-Z'){
    break;
  }
}
console.log("And if you don't know, now you know.");

console.log('\nHigher-Order Functions - Functions as Data:');

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes

isTwoPlusTwo()

console.log(isTwoPlusTwo.name);

console.log('\nHigher-Order Functions - Functions as Parameters:');

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}

const anotherfunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

//higherOrderFunc(anotherFunc); 

console.log('\nIterators!!\n');

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(function(groceryItem){
  console.log('I want to eat a ' + groceryItem);
});

const animals2 = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals2.map(animal => animal[0]);
console.log(secretMessage);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
console.log(longFavoriteWords);


const animals3 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals3.findIndex(animal => {
  return animal === 'elephant';
})

console.log(`index of elephant string in animals3 array = ${foundAnimal}`);

const startsWithS = animals3.findIndex(sanimal => {
  return sanimal[0] === 's' ? true : false;
});
console.log(`index of the first element that starts with the letter s in the animals3 array = ${startsWithS}`);

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ',accumulator);
  console.log('The value of currentValue: ',currentValue);
  return accumulator + currentValue
}, 10);

console.log(newSum);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(word => {
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
  return word.length > 5}));

//Objects

let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};

console.log(fasterShip);


let fuelType = fasterShip["Fuel Type"]
console.log(`The Fuel Type of the ship is ${fuelType}.`)

let color = fasterShip.color
console.log(`The Color of the ship is ${color}.`)

//bracket notation instead of dot notation - you must use brackets for properties with special chars
let color2 = fasterShip['color'];
console.log(color2);

//Prperty assignment
//update existing prop
fasterShip.color = 'black';

//add new prop
fasterShip.numEngines = 5;

//Delete a prop
delete fasterShip['Fuel Type'];
console.log(fasterShip);

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

greenEnergy(fasterShip);
console.log(fasterShip);

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  },
  get numOfSensors() {
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};

console.log(robot.energyLevel)
robot.numOfSensors = 10;
console.log(robot.numOfSensors);

//Fatory Functions

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500',true);

tinCan.beep();

//Property vaulue shorthand

const iPhoneFactory = (model, year) => {
  return {
    model,
    year
  }
}

const newPhone = iPhoneFactory('iPhone 11', '2019')
console.log(`iPhone Model: ${newPhone.model}`)
console.log(`iPhone Year: ${newPhone.year}`)

const newPhone2 = iPhoneFactory('iPhone 12', '2020')
console.log(`iPhone Model: ${newPhone2.model}`)
console.log(`iPhone Year: ${newPhone2.year}`)

//Destructure Assignment

const { model } = newPhone2;
console.log(model);

//Built-in Object Methods - keys, entries, assign

const iphoneKeys = Object.keys(newPhone2)
console.log(iphoneKeys)

const iphoneEntries = Object.entries(newPhone2)
console.log(iphoneEntries)

const iPhone3 = Object.assign(
  {case: true, cost: 200}, newPhone2);

console.log(iPhone3);

//Copy Array Items Using slice()

function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence
}

console.log(spreadOut());

//Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
  // Only change code below this line
if (arr.indexOf(elem) >= 0) {
  return true
} 
  return false
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1, 15]));

//Create complex multi-dimensional arrays

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

let myNestedArray = [
  // change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]]
  // change code above this line

  console.log(myNestedArray);

//Add Key-Value Pairs to JavaScript Objects

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13
foods['grapes'] = 35
const berry = 'strawberries'
foods[berry] = 27
// Only change code above this line

console.log(foods);

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(`Scanned Item: ${checkInventory('apples')}`);

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

const users = {
  Alan: {
    online: true
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  },
  Danny: {
    online: true
  }
}

function countOnline(usersObj) {
  // Only change code below this line
let result = 0
for (let user in usersObj) {
  if (usersObj[user].online === true) {
    result++;
  }
}
return result;
  // Only change code above this line
}

console.log(`# of users online: ${countOnline(users)}`);


//Generate an Array of All Object Keys with Object.keys()

function getArrayOfUsers(obj) {
  // Only change code below this line
return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

let systemUser = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

function addFriend(usersObj, friend) {
  usersObj.data.friends.push(friend);
  return usersObj.data.friends;
}

console.log(addFriend(systemUser, "Pete"));
console.log(addFriend(systemUser, "Jacob"));

let bool = true;
let num = 0;
console.log(bool - num);

let num1 = 2;
let num2 = 5;
console.log(num2 % num1);

let flag1 = false;
let flag2 = false;
let flag3 = true;

if (flag1) {
    console.log('This will not print.');
} else if (flag2) {
    console.log('This will not print either.');
} else if (flag3) {
    console.log('This will print!');
}

if('') {
        console.log('A');
} else {
        if(null) {
          console.log('B');
        } else {
          console.log('C');
        }

        if(1) {
          console.log('D');
        } else {
          console.log('E');
        }
}

console.log('\n')

if('')
    console.log('A');
else
        if(null)
            console.log('B');
            console.log('C');

      if(5 - 100)
          console.log('D');
      else
          console.log('E');
          console.log('F');

console.log(!false);

if (!('abc' && !0)) {
        console.log('A');
} else {
        console.log('B');
}

function greet(name) {
  return 'Hello, ' + name;
}

console.log(greet('Danny'));

function isTruthy(param) {
  return !!param;
}

console.log(isTruthy('hello'));

function isEven(num) {
        return !(num % 2);
}

console.log(isEven(8));

function detectArguments(arg1, arg2, arg3) {

  let numUndefined = 3;

  if(arg1 === undefined) {
      numUndefined = numUndefined - 1;
  }

  if (arg2 === undefined) {
      numUndefined = numUndefined - 1;
  }

  if (arg3 === undefined) {
      numUndefined = numUndefined - 1;
  }

  return numUndefined
}

console.log(detectArguments(undefined, undefined, 3));

function round(x) {
  if(x % 1 === 0) {
    return x;
  }

  if(x <= 10) {
    return x - x % 1;
  }

  return x - x % 1 + 1;
}

console.log(round(9.9));

let arr = [1, 2, 3];
arr[3] = 4
console.log(arr.length + arr[4]);

let obj = { obj: {} };
obj.obj.obj = 19;

for (let index = 0; index < 5; index = index + 1) {
  console.log(`This is a loop!`);
}

console.log('\n');

let hovvdy = ['Ruby', 'Hide', 'Everything', 'Town'];

for (let i = hovvdy.length - 1; i >= 0; i--) { console.log(hovvdy[i]); }

//while loops - not used as much, can cause more infinite loops

let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

//looping objects

let jon = {
    firstName: 'Jon',
    lastName: 'Smith',
    age: 34,
    profession: 'Developer',
    married: true
};

let alex = {
    firstName: 'Alex',
  lastName: 'Johnson'
};

for(let key in jon) {
    console.log(key, ':', alex[key]);
}

let newestArray = [1, 2, 3];

for (let i = 0; i < newestArray.length; i++) { console.log(newestArray[i]); }

function double(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) { 
    results.push(arr[i] + arr[i]);
  }
  return results;
}

console.log('\n')

console.log(double(newestArray));

let person = {
    firstName: 'Jon',
    lastName: 'Smith'
};

function getFullName(obj) {
  return obj.firstName + ' ' + obj.lastName
}

console.log(`FULL NAME FUNCTION: ${getFullName(person)}`);

let wazzup = {
    number1: 5,
    number2: 2,
    number3: 900
} 

function addValues(obj) {
  let sum = 0
  for(let key in obj) {
    sum += obj[key];
  }
  return sum
}

console.log(addValues(wazzup));




