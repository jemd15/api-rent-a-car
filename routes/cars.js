var cars = [
    // Automóviles
    {"make": "Suzuki", "model": "Alto 800", "color": "Green", "price": "250", "type": "car"},
    {"make": "Hyundai", "model": "Elantra Coupe", "color": "White", "price": "250", "type": "car"},
    {"make": "Volkswagen", "model": "Gol Trend", "color": "Red", "price": "250", "type": "car"},
    // Jeeps
    {"make": "Jeep", "model": "Renegade WagenClub", "color": "Blue", "price": "250", "type": "jeep"},
    {"make": "Honda", "model": "Civic", "color": "Red", "price": "250", "type": "jeep"},
    // Station wagons
    {"make": "Fiat", "model": "Palio Weekend", "color": "White", "price": "250", "type": "station wagon"},
    {"make": "Honda", "model": "Civic", "color": "Black", "price": "250", "type": "station wagon"},
    {"make": "Volvo", "model": "V70", "color": "Grey", "price": "250", "type": "station wagon"},
    // Camionetas
    {"make": "Ford", "model": "Ranger", "color": "Blue", "price": "250", "type": "van"},
    {"make": "Dodge", "model": "Ram", "color": "Grey", "price": "250", "type": "van"},
    {"make": "Toyota", "model": "DMAX", "color": "Red", "price": "250", "type": "van"}
];

exports.getCars = function (req, res) {
    res.send(cars);
};

exports.updateCar = function (req, res) {
    // buscar como hacer esto
};