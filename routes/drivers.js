var drivers = [
    {"name": "Jennifer Aniston", "gender": "female"},
    {"name": "Whoopi Goldberg", "gender": "female"},
    {"name": "Emma Watson", "gender": "female"},
    {"name": "Tom Cruise", "gender": "male"},
    {"name": "Paul Walker", "gender": "male"},
    {"name": "Vin Diesel", "gender": "male"},
    {"name": "Jason Statham", "gender": "male"}
];

exports.getDrivers = function (req, res) {
    res.send(drivers);
};

exports.updateDriver = function (req, res) {
    // buscar como hacer esto
};