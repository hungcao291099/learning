const express = require('express')
const path = require('path')
var morgan = require('morgan')
const hbs  = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '/public')));
// http logger
app.use(morgan('combined'));
//handlebars
app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',  path.join(__dirname, 'resources/views'))

//start
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


