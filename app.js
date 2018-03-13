const express = require('express');

/***    INIT       ****/
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

/***    ROUTIN    ****/
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('*', (req, res) => {
  res.send('404 Error!');
});

/***    LISTENING ****/
app.listen(3000);
console.log('Server running');
