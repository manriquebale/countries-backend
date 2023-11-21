import express from 'express';
const { marked } = require('marked');
const fs = require("fs");
import { index } from './src/countries/countries.controller';

require('dotenv').config()
require("./connection")

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
 

app.get('/', function (req, res) {
  var readme = 'README.md';
  var output = fs.readFileSync(readme, 'utf8');
  res.send(marked(output.toString()));
});


app.get('/countries', index);


app.listen(port, () => {
  console.log(`Application running in http://localhost:${port}`);
}); 