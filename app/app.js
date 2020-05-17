const express = require('express'),
    path = require('path'),
    port = 3000;

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../static')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {});
});

app.use('/', router);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});