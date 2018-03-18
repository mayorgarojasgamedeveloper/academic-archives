const express = require('express');

/* INIT */
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

/** ROUTING*/
app.get('/', (req, res) => {
  res.render('home.ejs');
});
app.get('/descubre', (req, res) => {
  res.render('descubre.ejs');
});
app.get('/contacto', (req, res) => {
  res.render('contacto.ejs');
});
app.get('/iniciar-sesion', (req, res) => {
  res.render('iniciar-sesion.ejs');
});

/*Otros*/

app.get('*', (req, res) => {
  res.render('404.ejs');
});

/**LISTEN **/
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
