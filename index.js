var express = require('express');
var app = express();

app.use(require('./session.js'));
app.use(require('body-parser').urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home'));
app.get('/checkSignIn', require('./controller/checkSignIn.js'));
app.post('/login', require('./controller/xulyLogin'));
app.get('/signout', require('./controller/logout.js'));
