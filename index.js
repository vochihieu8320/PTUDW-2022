const express = require('express')

const expressLayouts = require('express-ejs-layouts');

const route = require('./routes/index.route');

const path= require('path');

const db = require("./model/index.js")

const app = express()

// import jquery and supply it with the new dom

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 3000

route(app)

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.listen(port, ()=>{console.log(`Server listen at ${port}`)})
