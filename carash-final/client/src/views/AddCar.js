import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { Link, navigate } from "@reach/router";

export default (props) => {
  const [errorMessage, setErrorMessage] = useState([]);

  const createCar = ({
    name,
    type,
    description,
    mileage,
    year,
    color,
  }) => {
    axios
      .post("http://localhost:8000/cars/new", {
        name,
        type,
        description,
        mileage,
        year,
        color,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message);
        }
        setErrorMessage(errArr);
      });
  };
  const displayValidator = errorMessage.map((error, i) => {
    return (
      <p className="alert alert-warning alert-dismissible fade show" key={i}>
        {error}
      </p>
    );
  });

  return (
    <div className="container">
      <h1>CarAsh Renter</h1>
      <h2>
        Please Give Us your Car Info:{" "}
   
      </h2>
      <Link to="/">Back to home </Link>
      {displayValidator}

      <Form
        initialName=""
        initialType=""
        initialDescription=""
        initialMileage=""
        initialYear=""
        initialColor=""
        buttonValue="Add A Car"
        onSuccess={createCar}
      />
    </div>
  );
};
