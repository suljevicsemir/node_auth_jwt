const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');

const dbURL = "mongodb+srv://semir:pa6Brnzq4VrgGxg@cluster0.xrc1d.mongodb.net/net_ninja?retryWrites=true&w=majority";


const PORT = process.env.PORT || 3000;


mongoose.connect("mongodb+srv://semir:pa6Brnzq4VrgGxg@cluster0.xrc1d.mongodb.net/net_ninja?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((result) => {
    console.log('Connected to database!');
    console.log('Server started on PORT', PORT);
})
.catch((err => {
    console.log("Error connecting to database");
    console.log(err);
}))

