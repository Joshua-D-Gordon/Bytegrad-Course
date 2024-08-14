// var let const & data type structures (strings, numbers, bolleans, arrays, objects)
const description = 'We need somthing';
const sqaureMeters = 100;
const specialCoating = true;
const floorOptions = ['carpet', 'hardwood', 'tiles'];
const renovationObject = {
    ownerName: 'John',
    maximumPrice: 5000,
    catogory: 'bathroom',
    newShower: true
};

// functions vs arrow function

function foo(){
    return 1;
}

function sqaureMetersCalc(sqrMtr){
    return sqrMtr + 1000;
}

// arrow function
const foo1 = () => {
    return 1;
}

const sqaureMetersCalc1 = (sqrMtr) =>{
    return sqrMtr + 1000;
}

// most compact arrow function form
const smc = (sqrMtr) => 1000 + sqrMtr;

//
const price = 9000;
const result1 = 'the Total cost will be:' + price;
// template literals
const result = `the Total cost will be ${price}`;

// if else statments

if(price == 500){
    console.log('hello');
}else{
    console.log('blabla');
}

// compact if else
price > 500 ? console.log('hello') : console.log('blabla');

// scopes within blocks
if(5000){
    let hello = 5;
}else{
    let hi = 50;
}

//console.log(hello); // ERROR only works in scope

// manipulating html & css
const headingStart = document.querySelector('.heading');
//headingStart.textContent = 'i love lahan';
//headingStart.innerHTML = 'Hello <span class="heading--big">everyone</span>'

//headingStart.insertAdjacentHTML('beforebegin', '<h2>hi</h2>')

// manipulating css
//headingStart.classList.add('heading--big');

//EVENTS 
//click, mouse enter, mouse leave, mouse move, scroll event

const clickHandler = () =>{
    headingStart.style.color = 'red';
    console.log('change color')
}
headingStart.addEventListener('click', clickHandler);


