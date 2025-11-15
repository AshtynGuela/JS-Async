console.log("Start of script")

setTimeout(function() //Example of a delayed function/async operation within js
{
    console.log("Late...")
    }, 1000); // Initiates after 1 second delay without blocking the main thread.

console.log("End of script")