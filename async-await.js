//Async/Await:
// Async: makes a function return for a promise — everything after async is placed on an event queue.
// Await: makes an async function wait for promise

// Allows async code to be written synchronously
function TryFeelings() {
return myPromise = new Promise((resolve, reject) => {
  dice = Math.random() > 0.5;//Simulating success/failure
  setTimeout(() => { 
    if (dice) {
        resolve("I love you!"); 
     } else {
            reject("I hate you!");  
        }
    }, 1000); //5 seconds delay to simulate async operation
});
}

async function myFeelings() { // the function is "async"
    try{
        feelResult = await TryFeelings();                   // using await, useful as alternative to method chaining
    document.getElementById("demo").innerHTML = feelResult  
    console.log(feelResult);

    
    }   
    catch(error){                                           // try can be used to address the reject part of a promise
        console.error(error);
        document.getElementById("demo").innerHTML = error
    }
}

myFeelings()

document.getElementById("demo").innerHTML ="What do I feel for you?";