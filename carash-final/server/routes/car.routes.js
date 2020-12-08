const CarController = require("../controllers/car.controller")


module.exports = (app) => {
    app.get("/cars" , CarController.getAllCars);
    app.post("/cars/new" , CarController.createCar);
    app.get("/cars/:id" , CarController.getOneCar);
    app.put("/cars/:id" , CarController.updateCar);
    app.delete("/cars/:id" , CarController.deleteCar);

    app.post("/users", CarController.createUser);
    app.post("/register", CarController.createRegister);
}