var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

var app = express();

app.use(session({secret: 'hellotanvi'}));  // string for encryption
//app.use(express.static(path.join(__dirname,'./static')))

app.use(bodyParser.urlencoded(true));

app.set('views',path.join(__dirname,'./views'));
//app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var routes = require('./routes/routes.js')(app);
//console.log(routes)


app.listen(8000, function() {
  console.log("listening on port 8000");
})