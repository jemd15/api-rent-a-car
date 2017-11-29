var users = [
    {"id":"1", "name": "Juan García", "email": "jgarcia@correo.com", "img": "lorempixel.com/people/1"},
    {"id":"2", "name": "María Pérez", "email": "mperez@correo.com", "img": "lorempixel.com/people/2"},
    {"id":"3", "name": "David Alonso", "email": "dalonso@correo.com", "img": "lorempixel.com/people/3"}
];

exports.getUsers = function(req, res) {
    res.send(users);
};

exports.addUser = function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    // Add user with predefined image for the demo
    users.push({"name": name, "email": email, "img": "http://localhost:3000/public/trip.jpg", "password": password});
    res.send(users);
};

exports.updateUser = function(req, res) {
    // TODO: Not included in this demo
};

exports.deleteUser = function(req, res) {
    var userId = req.params.userId;

    for (var userIndex in users) {
        var user = users[userIndex];

        if (user.id === userId) {
            users.splice(userIndex, 1);
            break;
        }
    }

    res.send(users);

};