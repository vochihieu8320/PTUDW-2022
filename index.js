import express from "express";

import expressEjsLayouts from "express-ejs-layouts";

import route from './routes/index.route.js';

import path from 'path';
import { fileURLToPath } from 'url';

const app = express()

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(expressEjsLayouts);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000

app.listen(port, ()=>{console.log(`Server listen at ${port}`)})

route(app)