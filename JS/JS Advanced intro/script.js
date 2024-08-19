// Arrays
const numbers = [10, 100, 500, 1000];

// numbers.push(1200);

// for each 
// numbers.forEach((Element) => {
//     console.log(2*Element)
// });

//map returns a new array
// const newNumbers = numbers.map((elemnt) =>{
//     return elemnt*=2;
// });

// some returns true or false
// const res = numbers.some((num) =>{
//     return num > 100;
// });

//returns 500 as 500 is the first over 400
// const res = numbers.find((num) =>{
//     return num > 400;
// });

//filter
// returns new array with [500, 1000]
// const newNums = numbers.filter((num) =>{
//     return num > 400;
// });

// console.log(newNums);

// // OBJECTS
// const user = {
//     name: 'John',
//     age: 45
// };
// // notaiton with .
// console.log(user.name);
// // notaiton with bracets
// console.log(user['name']);

// // user is const we can change the inner contents but not the object user
// user.name = 'Emily';
// console.log(user.name);

// --FUNCTIONS--

//normal
function doSomthing(){

}

// const calculatePrice = () =>{

// }

//calculatePrice(); // call these functions later

//methods
// array has methods, some, map, ect these are call back functions
// anonmouse no name needed
[5,6,67].some(()=>{

}); // some is a method of the array, also push, remove ect...

//objects with mehtods
const obj = {
    name: 'John',
    age: 13,
    hobbies: ['golf', 'skiing'],
    calculateAge: function(){
        return 30 + this.hobbies.length;
    }
};

console.log(obj.calculateAge());

// default params

const calculatePrice = (sqrmeters=10) =>{ // default value of 10
    return 5000 +sqrmeters;
}

console.log(calculatePrice());

// deconstructing
const {name, age} = obj;

console.log(age + 10);

// speard operator
const numbers2 = [20, 30, 40];
const newNums = [...numbers, ...numbers2];
console.log(newNums);

// PRIMITIVES VS REFRENCE VALUES
// cant compare arrays & objects like numbers

//UNDIFEINED AND NULL
const data = {
    cities: ['1', '2'],
    month: 'july'
};

console.log(data.temps); // undifined as temps dose not exist

// NULL initilize empty state as null

//SHORT CIRCITING
// && || will check only what it needs to satisfiy the result

// FETCH API WITH Async
// diffrent syntax
// const res = await fetch('https://reqres.in/api/users');
// const dataUsers = await res.json();

// SWITCH STATMENT
const browser = 'chrome';

switch(browser){
    case 'firefox':
        console.log('firefox');
        break;
    case 'chrome':
        console.log('chrome');
        break;
}

// using other 
// import { convertCurrency } from "./utilities";

// console.log(convertCurrency(100));

console.log(window);

// date
const date = new Date(2050, 10, 5);
console.log(date);