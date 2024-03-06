import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AnimalForm from "./form/animalForm";
import Container from "./Container";

export default function UpdateAnimalInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    age: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/animals/${id}`)
      .then((res) => {
        setAnimal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/animals/${id}`, animal)
      .then((res) => {
        navigate(`/show-animal/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <h1 className="display">Update {animal.name}'s information:</h1>
      <AnimalForm
        onChange={onChange}
        onSubmit={onSubmit}
        noValidate={true}
        animal={animal}
      />
    </Container>
  );
}
