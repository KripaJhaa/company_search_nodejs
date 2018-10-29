var express = require('express');
var app = express();
var dbConnect = require('./db-mc');
var cors = require('cors');

var originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
     'http://www.myproductionurl.com'
  ];

  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  //here is the magic
  app.use(cors(corsOptions));
   

bodyParser = require('body-parser');
var morgan = require('morgan'); // log requests to the console (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride());

app.use(morgan('dev'));

dbConnect.connectDB();
var port = Number(process.env.PORT || 8800);
require('./controllers/search.controller').init(app);

var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});