var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-Parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', 'dist')));

app.use(session({secret:"DontTellAnybody"}));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(8000, function(){
  console.log("listening on 8000");
})
