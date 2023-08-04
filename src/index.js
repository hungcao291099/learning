const express = require('express')
const path = require('path')
var morgan = require('morgan')
const hbs  = require('express-handlebars');
const app = express()
const port = 3000
// http logger
app.use(morgan('combined'));

app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views')
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/', (req, res) => {
  res.render('news')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})