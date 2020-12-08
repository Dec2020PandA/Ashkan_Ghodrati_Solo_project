import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import {Link , navigate } from "@reach/router";

export default(props)=> {
    const {id} =props;
    const [name , setName] = useState("");
    const [type , setType] = useState("");
    const [description, setDescription] = useState("");
    const[mileage , setMileage] = useState("");
    const[year , setYear] = useState("");
    const[color , setColor] = useState("");
    
useEffect(()=>{
    axios.get("http://localhost:8000/cars/"+ id)
    .then(res =>{
        setName(res.data.name)
        setType(res.data.type)
        setDescription(res.data.description)
        setMileage(res.data.mileage)
        setYear(res.data.year)
        setColor(res.data.color)
        
    })
    .catch(err => console.log(err));

},[])




    return(
        <div className="container" >
            
            <h1>CarAsh Renter</h1>
    <h3 >Details about: {name}</h3> 
    
    <DeleteButton carId={id}  onSuccess={()=> navigate("/") }carName={name}  />
    <div >
    <p>Car type: </p>
    <div class="alert alert-primary" role="alert">{type}</div>
    <p>Description: </p>
    <div class="alert alert-primary" role="alert">{description}</div>
    <p>Mileage: </p>
    <div class="alert alert-primary" role="alert">{mileage}</div>
    <p>Year Of built: </p>
    <div class="alert alert-primary" role="alert">{year}</div>
    <p>Color: </p>
    <div class="alert alert-primary" role="alert">{color}</div>
     


    </div>
            
    <Link to="/">Back to home   </Link>
            </div>
    )
}