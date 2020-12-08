import React, {useState , useEffect} from "react"
import axios from "axios"

export default(props) => {
    const {carId , onSuccess ,carName} = props;
    const onClickHandler = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/cars/"+ carId)
        .then(car => {
        onSuccess()
    })
}


    return(
        <button type="button" onClick={onClickHandler} class="btn btn-danger">Rent {carName}</button>
    )
}
