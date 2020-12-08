
const Car = require("../models/car.model");


module.exports.createCar = (req, res) => {
  const {
    name,
    type,
    description,
    mileage,
    year,
    color,
  } = req.body;
  Car.create({
    name,
    type,
    description,
    mileage,
    year,
    color,
  })
  .then((car)=> res.json(car))
  .catch(err => res.status(400).json(err))
};
module.exports.getAllCars= (req,res)=>{
    Car.find().sort({type: 'desc'}) 
    .then(cars=> res.json(cars))
    .catch(err=> res.json(err))
}
module.exports.getOneCar = (req,res)=>{
    Car.findById({_id: req.params.id})
    .then(car => res.json(car))
    .catch(err => res.json(err))
}
module.exports.updateCar = (req,res)=> {
   
    Car.findByIdAndUpdate({_id:  req.params.id} , req.body ,{new:true , runValidators:true})
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
}
module.exports.deleteCar = (req,res) => {
        Car.findByIdAndRemove({_id: req.params.id})
        .then(car=> res.json(car))
        .catch(err => res.json(err))
}
module.exports.createUser= (req, res) => {
  console.log("I'M IN THE CONTROLLER");
  User.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.json(err));
}
module.exports.createRegister= (req, res) => {
  console.log("I'M IN THE CONTROLLER");
  Register.create(req.body)
    .then((newRegister) => res.json(newRegister))
    .catch((err) => res.json(err));
}