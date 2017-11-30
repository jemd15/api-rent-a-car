var cars = [
    // Automóviles
    {"make": "Suzuki", "model": "Alto 800", "color": "Green", "price": "250", "type": "car", "img": "/public/cars/Suzuki-Alto800.jpg"},
    {"make": "Hyundai", "model": "Elantra Coupe", "color": "White", "price": "250", "type": "car", "img": "public/cars/Hyundai-Elantra-Coupe.jpg"},
    {"make": "Volkswagen", "model": "Gol Trend", "color": "Red", "price": "250", "type": "car", "img": "public/cars/Volkswagen Gol Trend.jpgpublic/cars/Volkswagen Gol Trend.jpg"},
    // Jeeps
    {"make": "Jeep", "model": "Renegade WagenClub", "color": "Blue", "price": "250", "type": "jeep", "img": "public/jeeps/Jeep-Renegade_WagenClub.jpg"},
    {"make": "Jeep", "model": "Wrangler Unlimited", "color": "Black", "price": "250", "type": "jeep", "img": "public/jeeps/Jeep-Wrangler_Unlimited.jpg"},
    // Station wagons
    {"make": "Fiat", "model": "Palio Weekend", "color": "White", "price": "250", "type": "station wagon", "img": "public/station-wagons/Fiat-Palio_Weekend.jpg"},
    {"make": "Honda", "model": "Civic", "color": "Black", "price": "250", "type": "station wagon", "img": "public/station-wagons/Honda-Civic.jpg"},
    {"make": "Volvo", "model": "V70", "color": "Grey", "price": "250", "type": "station wagon", "img": "public/station-wagons/Volvo-V70.jpg"},
    // Camionetas
    {"make": "Ford", "model": "Ranger", "color": "Blue", "price": "250", "type": "van", "img": "public/vans/Ford-Ranger.jpg"},
    {"make": "Dodge", "model": "Ram", "color": "Grey", "price": "250", "type": "van", "img": "public/vans/Dodge-Ram.jpg"},
    {"make": "Toyota", "model": "DMAX", "color": "Red", "price": "250", "type": "van", "img": "public/vans/Toyota-DMAX.jpg"}
];

exports.getCars = function (req, res) {
    res.send(cars);
};

exports.updateCar = function (req, res) {
    // buscar como hacer esto
};