import React, {useState , useEffect} from "react"
import axios from "axios";
import {Link} from "@reach/router"
export default (props)=> {

    const[cars , setCars] = useState([]);
    const [loaded , setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/cars")
        .then(cars=> { 
            setCars(cars.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))

    },[]);

    const displayTable = ()=>  {
        return(
     <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Info</th>
                    </tr>
             </thead>
                    
                    <tbody>{displayCars} </tbody>

      </table>
        
        )};

    const displayCars = cars.map((car ,i) => {
        return (
            <tr>
            <td>{car.name}</td>
            <td>{car.type}</td>
            <td> 
                <Link to={"/cars/"+ car._id +"/edit"} > Edit |</Link>
                <Link to={"/cars/"+car._id}> Details</Link>
            </td>
            </tr>
        )})



    return (
        <div className="container">
            
            
            <div>{ displayTable()}</div>
        </div>


    )

    
}