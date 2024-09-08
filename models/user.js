const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String
});


const User = mongoose.model('User', userSchema);

module.exports = User;

// const User = mongoose.model('User', userSchema);
// is used to create a model for the User collection in MongoDB, based on the provided userSchema. Let's break down the components:

// Components:
// mongoose.model: This method is used to create a model in Mongoose. A model is a wrapper around the schema and provides an interface to interact with the MongoDB collection.

// 'User': This is the name of the model. Mongoose will automatically create a collection in MongoDB with the pluralized, lowercased version of this name, which will be users in this case. So, the User model corresponds to the users collection in your MongoDB database.

// userSchema: This is the schema that defines the structure of the documents within the users collection. It specifies the fields and their types, validation rules, default values, and any other constraints.

// A model in Mongoose is primarily used to perform CRUD (Create, Read, Update, Delete) operations on documents that adhere to the schema's structure within a collection in MongoDB.

// 2. Collections
// Definition: A collection is a grouping of MongoDB documents. It is equivalent to a table in a relational database. Collections do not enforce a schema, meaning documents within the same collection can have different structures.
// Example: A users collection might contain documents like:
// json
// Copy code
// [
//   {
//     "_id": "60b8d295f1b0e3b5c8f30f92",
//     "name": "Alice",
//     "age": 30,
//     "email": "alice@example.com"
//   },
//   {
//     "_id": "60b8d2a9f1b0e3b5c8f30f93",
//     "name": "Bob",
//     "email": "bob@example.com"
//   }
// ]
// In this collection, the first document has fields for name, age, and email, while the second document only has name and email.


// 1. Collection:
// In MongoDB, a collection is a group of documents.
// Think of a collection as similar to a table in a relational database.
// For example, if you have a collection named users, it contains all the user records.

// 2. Documents:
// A document is a single record in a collection.
// In the users collection, each individual user (e.g., John, Jane, etc.) is a document.
// Each document is a JSON-like structure composed of key-value pairs (e.g., { "username": "john_doe", "name": "John Doe" }).

// 3. Schema:
// A schema defines the structure of documents within a collection.
// It outlines the fields and their types, ensuring that all documents in the collection follow a consistent structure.
// For instance, a userSchema might define that each user document should have fields like username, name, email, and password.
// Example Flow:
// Schema Definition:

// javascript
// Copy code
// const userSchema = mongoose.Schema({
//     username: String,
//     name: String,
//     email: String,
//     password: String
// });
// This userSchema defines that every user document should have a username, name, email, and password.

// Model Creation:

// javascript
// Copy code
// const User = mongoose.model('User', userSchema);
// The User model is created based on the userSchema. It represents the users collection in MongoDB.


// Creating a Document:

// javascript
// Copy code
// const newUser = new User({
//     username: 'john_doe',
//     name: 'John Doe',
//     email: 'john@example.com',
//     password: 'securepassword123'
// });



// Summary:
// Collection (users): A group of user records.
// Document: An individual user record within the users collection.
// Schema: The blueprint that defines what fields each document in the users collection should have.
// So yes, each user in the users collection is a document, and the structure of these documents is defined by the schema.