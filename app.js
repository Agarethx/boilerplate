const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get("/", (req, res) => {
   res.render('index')
});

app.get("/about", (req, res) => {
   res.render('about')
});

app.get("/detail/:id", (req, res) => {
   res.render('detail')
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
