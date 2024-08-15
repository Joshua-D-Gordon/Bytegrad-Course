const textareaEL = document.querySelector('.textarea');
let charactersNumberEL = document.querySelector('.stat__number--characters');
let wordsNumberEL = document.querySelector('.stat__number--words');
let twitterNumberEL = document.querySelector('.stat__number--twitter');
let facebookNumberEL = document.querySelector('.stat__number--facebook');


const inputHandler = () => {
    //input validation
    if(textareaEL.value.includes('<script>')){
        alert('you canot use that');
        textareaEL.value = textareaEL.value.replace('<script>', '');
    }
    //determine new number f characters
    const numberOfCharacters = textareaEL.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;
    let numberOfWords = textareaEL.value.split(' ').length;

    if(textareaEL.value.length === 0){
        numberOfWords = 0;
    }

    // add visual indicator if limit is exceeded
    if(twitterCharactersLeft < 0){
        twitterNumberEL.classList.add('stat__number--limit');
    }else{
        twitterNumberEL.classList.remove('stat__number--limit');
    }

    if( facebookCharactersLeft < 0){
        facebookNumberEL.classList.add('stat__number--limit');
    }else{
        facebookNumberEL.classList.remove('stat__number--limit');
    }

    //set new numbers
    charactersNumberEL.textContent = numberOfCharacters;
    twitterNumberEL.textContent = twitterCharactersLeft;
    facebookNumberEL.textContent = facebookCharactersLeft;
    wordsNumberEL.textContent = numberOfWords;
};

textareaEL.addEventListener('input', inputHandler);