require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app  = express();
var path = require('path');
const battleRouter= require('./routers/battleRouter')
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use((req,res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use(battleRouter);

app.get('/ping', (req, res) => {
    res.send('pong');
})
app.get('*', (req, res) =>{
    res.send('404 Error page')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



