// Imports
import {
    searchInputEl,
    searchFormEl,
    spinnerSearchEl,
    jobListSearchEl,
    numberEl,
    errorTextEl,
    errorEl,
    BASE_API_URL
} from '../common.js';
import renderError from './Error.js';
import renderSpinner from './Spinner.js';
import renderJobList from './JobList.js';

// SEARCH COMPONENT
const submitHandler = (event) =>{
    // prevent default behavoir
    event.preventDefault();

    //get search text
    const searchText = searchInputEl.value;

    // validation (regular expressions example)
    const forbiddenPatterns = /[0-9]/;
    const patternMatch = forbiddenPatterns.test(searchText);

    if(patternMatch){
        renderError('Your search may not contain numbers');
        return;
    }

    //blur input
    searchInputEl.blur();

    // remove prevoise job items
    jobListSearchEl.innerHTML = '';

    //render spinner
    renderSpinner('search');

    //fetch search results
    fetch(`${BASE_API_URL}/jobs?search=${searchText}`)
        .then(response =>{
            if(!response.ok){
                // http status code 4xx 5xx range
                // when throwing the code moves right to the catch
                throw new Error('resources issue');
            }
            return response.json();
        })
        .then(data => {
            // extract job data
            const {jobItems} = data;
            
            // remove spinner
            renderSpinner('search');

            //render number of results
            numberEl.textContent = jobItems.length;

            //render job item in job list
            renderJobList(jobItems);
        })
        .catch(error => { // network problem
            renderSpinner('search');
            renderError(error.message);
        });

};

searchFormEl.addEventListener('submit', submitHandler);