var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var bp = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/message/create', function (req, res) {
    res.render('create');
});

app.post('/message/show', bp, function(req, res) {
    res.render('show', {data: req.body});
});

app.listen(3000);
console.log('Your project is running at 3000 port...');



