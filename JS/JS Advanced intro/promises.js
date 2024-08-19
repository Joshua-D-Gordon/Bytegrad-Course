// 1) create promisses
const p = new Promise((resolve, reject) =>{
    const numOfCustomers = 1;

    if(numOfCustomers> 5){
        resolve('success');
    }else{
        reject('problem...');
    }
});

// 2) consume with the() & catch()
p.then(value =>{
    console.log(value);
}).catch(reason =>{
    console.log(reason);
})

// 3) aysync and // diffrent syntax then .then()
// has to be in async function

const checkResults = async () =>{
    try{
        const value = await p; 
        console.log(value);
    }catch (reason){
        console.log(reason);
    }
    
};
checkResults();

// 4) why and where to use promisses
// use async code so program dose not freeze
// frontend - fetch api or axios library
// backend - reading files

// 5) Fetch API (most common example of promisses)
fetch('https://reqres.in/api/users').then((result)=>{
    result.json().then(result =>{
        console.log(result.data);
    });
}).catch(error =>{
    console.log(error);
})

// 6) waiting for multiple promisses
Promise.all([
    fetchPhotos,
    fetchComments
]).then(values =>{
    //render
})

// 7) waiting for one of many promisses (phot on multiple photos)
// just get the quickst photo

Promise.any([
    fetchPhotos,
    fetchComments
]).then(values =>{
    //render
})

