const express = require('express')

const expressLayouts = require('express-ejs-layouts');

const route = require('./routes/index.route');

const path= require('path');

const app = express()

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 3000

route(app)

app.listen(port, ()=>{console.log(`Server listen at ${port}`)})
