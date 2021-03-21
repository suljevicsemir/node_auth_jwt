const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const app = express();
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(cookieParser());


const dbURL = "mongodb+srv://semir:pa6Brnzq4VrgGxg@cluster0.xrc1d.mongodb.net/net_ninja?retryWrites=true&w=majority";


const PORT = process.env.PORT || 5000;


mongoose.connect("mongodb+srv://semir:pa6Brnzq4VrgGxg@cluster0.xrc1d.mongodb.net/net_ninja?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then((result) => {
    console.log('Connected to database!');
    app.listen(PORT, () => {
        console.log('Server started on PORT', PORT);
    })
})
.catch((err => {
    console.log("Error connecting to database");
    console.log(err); 
}))



app.get('/', (req, res) => {
    res.render('home');
});

app.get('/smoothies', (req, res) => {
    res.render('smoothies');
})

app.use(authRoutes);
