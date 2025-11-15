/**A Promise is an Object that links Producing code and Consuming code with three states 
 * Fulfilled: the result is a value
 * Pending(working): the result is not yet available/undefined
 * Rejected: the result is an error
 * The state and result of a Promise is unaccessible from the outside.
*/

const myPromise = new Promise(function(myResolve, myReject) {
  const dice = Math.random() > 0.5;//Simulating success/failure
  setTimeout(function(){ 
    if (dice) {
        myResolve("I love you!"); 
     } else {
            myReject("I hate you!");  
        }
    }, 3000); //3 seconds delay to simulate async operation
});

myPromise
.then(function(value) { //This runs when promise is "fulfilled"
    document.getElementById("demo").innerHTML = value;
  })
  .catch(function(error) { //This runs when promise is "rejected"
    document.getElementById("demo").innerHTML = "Error: " + error;
    console.error(error);
  })
  .finally(function() { //This runs regardless
    console.log("Promise completed");
  });
