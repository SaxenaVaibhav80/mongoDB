const mongoose =require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/testingdb')

const db = mongoose.connection

db.on("error",(err)=>
{
    console.log(err)
})

db.on("open",()=>
{
    console.log("connected DB...")
})

module.exports=db  // not important 



// db.on("open", ...):

// db yaha mongoose.connection ko refer kar raha hai.
// .on("open", ...) ek event listener set kar raha hai jo "open" event ko listen karega.
// "open" event tab trigger hota hai jab MongoDB se connection successfully establish ho jata hai.
// () => { ... }:

// Yeh ek arrow function hai jo "open" event ke trigger hone par execute hoga.
// Matlab, jaise hi database se connection successful ho jata hai, yeh function execute hoga.
// console.log("connected DB...");:

// Jab function execute hota hai, tab yeh line console me "connected DB..." message print kar deti hai.
// Iska matlab hai ki ab aapka application successfully database se connected hai.

// This code snippet is used to connect a Node.js application to a MongoDB database using the Mongoose library, a popular Object Data Modeling (ODM) tool for MongoDB and Node.js. Let’s break it down line by line:

// 1. const mongoose = require("mongoose")
// Explanation:
// This line imports the Mongoose library, which is required for interacting with MongoDB in a more structured way.
// require("mongoose") loads the Mongoose module, allowing you to use its features such as schema definitions, model creation, and database interactions.
// Why it's used:
// Mongoose provides a higher-level abstraction for working with MongoDB, offering features like schema validation, middleware, and a more consistent API compared to using the MongoDB driver directly.


// 2. mongoose.connect('mongodb://127.0.0.1:27017/testingdb')
// Explanation:
// This line establishes a connection to the MongoDB database.
// 'mongodb://127.0.0.1:27017/testingdb' is the connection string:
// mongodb:// specifies the protocol.
// 127.0.0.1 is the IP address of the MongoDB server (localhost in this case).
// 27017 is the default port on which MongoDB listens.
// testingdb is the name of the database to which you want to connect. If it doesn’t exist, MongoDB will create it when you first write data to it.
// mongoose.connect() is an asynchronous function that returns a promise. It begins the process of connecting to the database specified by the connection string.
// Why it's used:
// This method is the starting point for any interaction with a MongoDB database through Mongoose. Without this connection, you can't perform any operations on the database.


// 3. const db = mongoose.connection
// Explanation:
// This line stores the default connection (mongoose.connection) in a constant named db.
// mongoose.connection is a reference to the default connection created when you call mongoose.connect().
// Why it's used:
// By storing this connection in a variable, you can easily attach event listeners to monitor the state of the connection (e.g., listening for errors, successful connections, etc.).


// 4. db.on("error", (err) => { console.log(err); })
// Explanation:
// This line sets up an event listener on the db object for the "error" event.
// If there's an error during the connection process or any other database-related operation, this event listener will be triggered.
// console.log(err) logs the error to the console for debugging purposes.
// Why it's used:
// Error handling is critical in any application, and by listening for the "error" event, you can detect and respond to issues that might arise with the database connection, such as network problems or authentication failures.


// 5. db.on("open", () => { console.log("connected DB..."); })
// Explanation:
// This line sets up another event listener, this time for the "open" event.
// The "open" event is triggered once the connection to the MongoDB database has been successfully established.
// console.log("connected DB..."); logs a success message to the console.
// Why it's used:
// This listener provides feedback that the connection was successful, which is useful for confirming that your application is ready to interact with the database.


// 6. module.exports = db
// Explanation:
// This line exports the db object (the MongoDB connection) so that it can be reused in other parts of your application.
// module.exports is a Node.js feature that allows you to export functions, objects, or primitives from a file so they can be required in another file.
// Why it's used:
// By exporting the db connection, you can maintain a single, reusable connection across your application, avoiding the need to reconnect to the database multiple times.
// Summary
// The code establishes a connection to a MongoDB database using Mongoose, listens for any errors or successful connection events, and then exports the connection object for use in other parts of the application.
// This structure is common in Node.js applications that use MongoDB, helping to ensure that the database connection is properly managed and errors are handled.