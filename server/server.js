const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        "name":"shubham"
    });
})

app.listen(port, () => {
    console.log("oh! god Finally it's running ohhhh!")
})

// database connection
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongo db is connected")
}).catch((err) => {
    console.log(err);
})
