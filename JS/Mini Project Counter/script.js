const counterTitleEL = document.querySelector('.counter__title');
const counterEL = document.querySelector('.counter');
const increaseButtonEL = document.querySelector('.counter__button--increase');
const decreaseButtonEL = document.querySelector('.counter__button--decrease');
const resetButton = document.querySelector('.counter__reset-button');

const counterValueEL = document.querySelector('.counter__value');

function increaseByOne(){
    // get current value
    const currentValue = counterValueEL.textContent;
    //convert to number
    let currentValueAsNumber = +currentValue;

    if(currentValueAsNumber < 5){
        // increment by 1
        currentValueAsNumber += 1;
        // set new value
        counterValueEL.textContent = currentValueAsNumber;
    }else{
        counterEL.classList.add('counter--limit');
        console.log(counterTitleEL);
        counterTitleEL.innerHTML = '<b>Limit!</b> you have reach the limit';
        increaseButtonEL.disabled = true;
        decreaseButtonEL.disabled = true;
    }
   
}

increaseButtonEL.addEventListener('click', increaseByOne);

decreaseButtonEL.addEventListener('click', function(){
    // get current value
    const currentValue = counterValueEL.textContent;
    //convert to number
    let currentValueAsNumber = +currentValue;

    if(currentValueAsNumber > 0){
        // decrease by 1
        currentValueAsNumber -= 1;
        // set new value
        counterValueEL.textContent = currentValueAsNumber;
    }
});

resetButton.addEventListener('click', function(){
   //hard set to 0
    counterValueEL.textContent = 0;
    increaseButtonEL.disabled = false;
    decreaseButtonEL.disabled = false;
    counterTitleEL.innerHTML = 'Fancy Counter';
    counterEL.classList.remove('counter--limit');
    resetButton.blur();

});

document.addEventListener('keydown', increaseByOne);
