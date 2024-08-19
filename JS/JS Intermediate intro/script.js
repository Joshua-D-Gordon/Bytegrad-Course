//Strings 
// length
const text = 'hello everyone!';

console.log(text.length);

//includes
console.log(text.includes('!'));

//to uppercase
console.log(text.toUpperCase());

//trim
console.log(text.trim());

// NUMBERS
const number = 154.124345
//toFixed() -- 0
console.log(number.toFixed());
// toFixed() -- 2
console.log(number.toFixed(2));

//BOOLEANS
if(!text.includes('hello')){
    console.log('100');
}else{
    console.log('test');
}

//server example
const response = {
    statusCode: 500,
    ok: false,
    data: [1,2,3]
}

if(!response.ok){
    // do somthing
    console.log('error handaling');
}

// ARRAYS
const numbers = [99, 1, 2, 3];

// # elements
console.log(numbers.length);

// Push
numbers.push(17);
console.log(numbers.length);
console.log(numbers.includes(1));

// forEach()
numbers.forEach((item) => {
   console.log(item *2);
});

console.log(numbers);

// OBJECTS IN ARRAY
const data = [{
    name: 'j',
    age: 45
},{
    name: 'u',
    age: 14
}];

console.log(data[0].name);

// OBJECTS
const user = {
    name: 'emily',
    age: 30,
    hobbies: ['1', '2', '3'],
    address: {
        city: 'miami',
        state: 'florida'
    }
}

console.log(user);
console.log(user.name);
console.log(user.hobbies);


// ++ , --
let num = 0;
num++;
console.log(num);

// FUNCTIONS

/*function addNumbers(a, b){
    const newNumber = a+b;
    console.log(newNumber);
}*/

// arrow functions
const addNumbers = (a, b) =>{
    const newNumber = a+b;
    console.log(newNumber);
}

addNumbers(4,5);

// Functions within functions
const logHi = () =>{
    console.log('hi');
}

const logHiHello = () =>{
    logHi();
    console.log('hello');
}

logHiHello();

//REFACTORING
//dont write duplicate code

//timeout
setTimeout(()=>{
    console.log('hello');
}, 5000);

//LOOPS

const arryNumbers = [5,10,15];
arryNumbers.forEach((num)=>{
    console.log(num + 1);
});

for( let i = 0; i< arryNumbers.length; i++){
    console.log(arryNumbers[i] + 1);
}

//FETCH API
fetch(); // network requests https://www.jsonplaceholder.typicode.com/todos

// fetch is a promise (needs to wait)

fetch('https://jsonplaceholder.typicode.com/todos')
.then((res)=>{ // .then() for when promise resolves
    return res.json(); // .json returns promis
})
.then(data =>{ // .then() for when promise resolves
    console.log(data);
})