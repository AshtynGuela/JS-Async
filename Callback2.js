//Callback - function passed as an argument, intended to be executed later typically when an async operation completes
function greet(name, callback) { //Main function that accepts a callback
    const greetingmessage = `Hello, ${name}`; //Greeting message
    callback(greetingmessage); //Callback function is used to pass the greeting to it
}

//The callback function to be executed
function displaygreet(message) {
    console.log(message);
}

//displaygreet is passed as a callback to greet
greet("Alice", displaygreet);


/**  Alt: Anonymous function using callback
greet("Bob", function(message) {
    console.log(message + " Welcome to Callback2.js!");
});

function processOrder(orderName, callback) {
    console.log(`Processing order: ${orderName}...`);
    setTimeout(function() {
        const result = `Order "${orderName}" is ready!`;
        callback(result);
    }, 1500);
}

processOrder("Burger", function(result) {
    console.log(result);
});

*/

