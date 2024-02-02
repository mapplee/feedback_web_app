// Importing required modules
const express = require('express'); // Express.js framework
const cors = require('cors'); // CORS middleware for handling cross-origin requests
const mongoose = require('mongoose'); // Mongoose library for MongoDB

const app = express();  // Creating an Express application instance
app.use(cors());   // Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // Middleware to parse incoming JSON requests


const PORT = process.env.PORT || 8080;   // Define the port number for the server to listen on, using either the environment variable PORT or defaulting to 8080 if the environment variable is not set

// Define the schema for the data to be stored in MongoDB
const schemaData = mongoose.Schema({
    title: String,
    message: String,
   }, {
    timestamps: true
   });
// Create a Mongoose model based on the schema, named "feedbacks"
const  feedbackModel = mongoose.model("feedbacks",schemaData);

// Establish connection to MongoDB database and start the server
mongoose.connect("mongodb://127.0.0.1:27017/feedbackCollection")
    .then(() => {
        console.log("Connected to db")
        app.listen(PORT, () =>console.log("server is running"));
    })
    .catch((err) => console.log(err))

// Define a route to handle POST requests to save feedback data to the database
app.post("/saveFeedback", async (req, res) => {
    console.log(req.body);
    const data = new feedbackModel(req.body);
    await data.save(); // Save the data to the MongoDB collection
     res.send({success: true, message: "Data save successfull"});
})

