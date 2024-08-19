// -- GLOBAL --
const MAX_CHARS = 150;
const textareaEL = document.querySelector('.form__textarea');
const feedbackListEL = document.querySelector('.feedbacks');
const hashtagListEL = document.querySelector('.hashtags');
const spinnerEL = document.querySelector('.spinner');
const BASE_API_URL = 'https://bytegrad.com/course-assets/js/1/api/feedbacks';

const renderFeedbackItem = (feedbackItem) =>{
    // new feedback Item HTML
    const feedbackItemHTML = `
        <li class="feedback">
        <button class="upvote">
            <i class="fa-solid fa-caret-up upvote__icon"></i>
            <span class="upvote__count">${feedbackItem.upvoteCount}</span>
        </button>
        <section class="feedback__badge">
            <p class="feedback__letter">${feedbackItem.badgeLetter}</p>
        </section>
        <div class="feedback__content">
            <p class="feedback__company">${feedbackItem.company}</p>
            <p class="feedback__text">${feedbackItem.text}</p>
        </div>
        <p class="feedback__date">${feedbackItem.daysAgo === 0 ? 'NEW': `${feedbackItem.daysAgo}d`}</p>
        </li>   
    `;

    //insert item in list
    feedbackListEL.insertAdjacentHTML('beforeend', feedbackItemHTML);
};

const inputHandler = () =>{
    // detrermine maximum number of characters
    const maxNrCharacters = MAX_CHARS;
    // detrmine numbe rof characters written
    const nrCharsTyped = textareaEL.value.length;
    //calculate value
    const charsLeft = maxNrCharacters - nrCharsTyped;
    // set new value
    document.querySelector('.counter').textContent = charsLeft;
};

textareaEL.addEventListener('input', inputHandler);

// Submit component
const formEL = document.querySelector('.form');

const showVisualIndicator = (clas) =>{
    formEL.classList.add(`form--${clas}`);

    //interval evry two seconds
    setTimeout(()=>{
        formEL.classList.remove(`form--${clas}`);
    }, 2000) // 2 secs
}

const submitHandler = event => {
    //prevent default browser action
    event.preventDefault();
    //get text from text area
    const text = textareaEL.value;
    // validate text
    if(text.includes('#') && text.length >= 5){
        showVisualIndicator('valid');
    }else{
        showVisualIndicator('invalid');

        // Foucus text area
        textareaEL.focus();

        // stop this function exec
        return;
    }
    // we need
    const hashtag = text.split(' ').find(word => word.includes('#'));
    const company = hashtag.substring(1);
    const badgeLetter = company.substring(0,1).toUpperCase();
    const upvoteCount = 0;
    const daysAgo = 0;

    //create feedback item object
    const feedbackItem = {
        upvoteCount: upvoteCount,
        badgeLetter: badgeLetter,
        company: company,
        daysAgo: daysAgo,
        hashtag: hashtag,
        text: text
    };

    //render feedback item
    renderFeedbackItem(feedbackItem);

    //send feedback item to server
    fetch(BASE_API_URL,{
        method: 'POST',
        body: JSON.stringify(feedbackItem),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response =>{
        if(!response.ok){
            console.log('not ok');
            return;
        }
        console.log('alls good');
        
    }).catch(error =>{
        return console.log(error);
    });

    //clear textarea
    textareaEL.value = '';

    //blur button
    submitBtnEL = document.querySelector('.submit-btn');
    submitBtnEL.blur();

    //reset counter
    document.querySelector('.counter').textContent = MAX_CHARS;

};

formEL.addEventListener('submit', submitHandler);

//Expand feedback
const clickHandler = (event) =>{
    //get clicked HTML element
    clickEL = event.target;
    //determine upvote intension
    const upvoteIntention = clickEL.className.includes('upvote');

    //run the appropriate logic
    if(upvoteIntention){
        //get closets upclose button
        const upvoteBtnEL = clickEL.closest('.upvote');

        //disable upvote button (prevent double-click, spam)
        upvoteBtnEL.disabled = true;

        // select upvote count within the upvote button
        const upvoteCountEL = upvoteBtnEL.querySelector('.upvote__count');

        // get current displayed upvote count
        let upvoteCount = +upvoteCountEL.textContent;

        //assgin new value
        upvoteCountEL.textContent = ++upvoteCount;

    }else{
        //expand clicked item
        clickEL.closest('.feedback').classList.toggle('feedback--expand');
    }
};

feedbackListEL.addEventListener('click',clickHandler);

// -- FETCH List COMPONENT --
//syncronus vs aysyncronus code
// syncrounus code - line by line not a problem, when waiting
// for a fetch reqesut could take much longer

// FETCH returns a promise
fetch(BASE_API_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        //remove spinner
        spinnerEL.remove();
        //iterate over each element in feedback array
        data.feedbacks.forEach(element => {
            renderFeedbackItem(element);
        });
        
    })
    .catch(error =>{
        feedbackListEL.textContent = `failed to fetch items: ${error.message}`;
    });

// HASHTAG LIST COMPONENT

const clickHandler2 = event => {
    //get clicked element
    const clickedEL = event.target;

    //stop function if click happends in list but outside buttons
    if(clickedEL.className === 'hashtags') return;

    //extract company name
    const companyNameFromHashtag = clickedEL.textContent.substring(1).toLowerCase().trim();

    //iterate over each feedback item in list
    feedbackListEL.childNodes.forEach(childnode =>{
        //stop iteration if text node
        if(childnode.nodeType === 3) return;

        //extract company name
        const companyNameFromFeedbackItem = childnode.querySelector('.feedback__company').textContent.toLowerCase().trim();

        //remove feed back items where company name not eqaul
        if(companyNameFromHashtag !== companyNameFromFeedbackItem){
            childnode.remove();
        }
    });

}

hashtagListEL.addEventListener('click', clickHandler2)

