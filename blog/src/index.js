const express = require('express')
const path = require('path')
var morgan = require('morgan')
const hbs  = require('express-handlebars');
const app = express()
const port = 3000
const methodOverride = require('method-override')
var bodyParser = require('body-parser')

const route =require('./routes');
const db = require('./config/db')

//connect to db
db.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, '/public')));

app.use(methodOverride('_method'));
// http logger
app.use(morgan('combined'));
//handlebars
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
  helpers:{
    sum: (a,b) => a + b,
  }}));
app.set('view engine', '.hbs');
app.set('views',  path.join(__dirname, 'resources/views'))


//route init
route(app); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})