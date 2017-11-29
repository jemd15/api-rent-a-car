var express= require('express');
var app = express();

var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

var routes = require('./routes/routes');
routes.assignRoutes(app);

app.listen(8000);
console.log('Servidor escuchando en el puerto 8000');