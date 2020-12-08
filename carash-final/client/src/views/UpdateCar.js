import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";
import {Link, navigate} from "@reach/router"

export default (props) => {
  const [cars, setCars] = useState("");
  const [errors, setErrors] = useState([]);
  const [load , setLoad] = useState(false)
  const { id } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/cars/" + id)
      .then((res) => {
        setCars(res.data);
        setLoad(true)
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateCar = ({name , type , description , mileage , year , color}) => {
      axios.put("http://localhost:8000/cars/"+ id , {name , type , description , mileage , year , color} )
      .then(res=> {
          console.log(res)
          navigate("/")
        })
      .catch((err) => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message);
        }
        setErrors(errArr);
        
      });
  };
  const displayValidator = errors.map((error, i) =>{
      return(
        <p className="alert alert-warning alert-dismissible fade show" key={i}>{error}</p>
      )
  });

      

      



  return (
    <div className="container">

        <h1>CarAsh Renter</h1>           
        <h2>Edit {cars.name} 
        </h2>
        <Link to="/">Back to home   </Link>
        {displayValidator}
     {load && <Form
        initialName={cars.name}
        initialType={cars.type}
        initialDescription={cars.description}
        initialMileage={cars.mileage}
        initialYear={cars.year}
        initialColor={cars.color}
        buttonValue="Edit Car"
        onSuccess={updateCar}
      />} 
      
    </div>
  )
}
