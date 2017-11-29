var users = require('./users');
var cars = require('./cars');
var drivers = require('./drivers');

exports.assignRoutes = function (app) {
    app.get('/users', users.getUsers);
    app.get('/cars', cars.getCars);
    app.get('/drivers', drivers.getDrivers);
    app.post('/users', users.addUser);
    app.put('/users/:userId', users.updateUser);
    app.delete('/users/:userId', users.deleteUser);
};