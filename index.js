const express = require('express')

const expressLayouts = require('express-ejs-layouts');

const route = require('./routes/index.route');

var passport = require('passport');

const session = require('express-session')

const path= require('path');

const db = require("./model/index.js")

const flash = require('connect-flash');

const app = express()

// import jquery and supply it with the new dom

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(flash());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 7200000 }
}))

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000

require("./helpers/passport.js")(passport)

route(app, passport)

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(port, ()=>{console.log(`Server listen at ${port}`)})
