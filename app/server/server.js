var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var builderData = require('./builderData.json');
var simulated_stats = require('./simulated_stats.json');

app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log('GET --> /');
  res.render('index', { builderData: JSON.stringify(builderData) });
});

app.post('/getlink', function (req, res) {
  console.log(req.body);
  res.json({ error: false, message: 'Link generated.' });
});


var server = app.listen(2000, function () {
  var port = server.address().port;
  console.log("Server listening at http://localhost:%s", port);
})
