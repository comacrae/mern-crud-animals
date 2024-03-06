import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AnimalForm from "./form/animalForm";

const CreateAnimal = (props) => {
  const navigate = useNavigate();

  const [animal, setAnimal] = useState({
    name: "",
    age: 0,
    species: "",
  });

  const onChange = (ev) => {
    setAnimal({ ...animal, [ev.target.name]: ev.target.value });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3000/api/animals", animal)
      .then((res) => {
        setAnimal({ name: "", age: 0, species: "" });
        navigate("/");
      })
      .catch((err) => {
        console.log(`Error in createAnimal:${err}`);
      });
  };

  return (
    <AnimalForm
      onChange={onChange}
      onSubmit={onSubmit}
      animal={animal}
      noValidate={false}
    />
  );
};

export default CreateAnimal;
