import React, {useState , useEffect} from "react"
import axios from "axios"
import CarList from "../components/CarList"
import {Link} from "@reach/router"

export default(props)=> {
 const styles={
     sideLink:{
        //  "margin-left" :"300px"
         

     }
 }
    return(
        <div className="container">
            <h1 style={{backgroundColor: "#1B97e6"}}>CarAsh Renter</h1>
            <Link style={styles.sideLink} className="homeLink" to="/cars/new">
            <button className="m-1 btn btn-sm btn-info">Add Your Car</button>
            </Link>
            <h3 style={{backgroundColor: "#062134", color:"white"}}>These Cars are Available for Rent</h3>

        <CarList />
        </div>
    )
}