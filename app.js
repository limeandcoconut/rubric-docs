var express = require('express');
var app = express();
var path = require('path');

app.set('views', 'out/');

app.use(express.static(path.join(__dirname, 'out')));

app.get('/', function(request, response) {
    response.render('index.html', {title: 'Rubric Docs'});
});

app.listen(7887, function() {
    console.log('Listening on port 7887');
});

