const numbers = [10, 100, 500, 1000];

// push()
numbers.push(2000);

// foreach
numbers.forEach((number) => {
    console.log(number * 2);
});

// map - returns NEW array
const newArray = numbers.map((number) => {
    return number * 2;
});

// some()  - returns if at least one if condition true
const result = numbers.some((number) => {
   return number >= 500; 
});

// find() - returns first element that satisfys condition
const result1 = numbers.find((number) => {
    return number > 800;
});

// filter - returns new array with elemnts that satisfy condition
const newNums = numbers.filter((number) => {
    return number > 400;
})

// OBJECTS

const person = {
    name: 'jhon',
    age: 45
};

console.log(person.name);
console.log(person['name']);

// can reassign object properties to a diffrent value

// spread 

const nums = [1,2,3];
const numsNext = [4,5,6];

const numstotal = [...nums, ...numsNext];