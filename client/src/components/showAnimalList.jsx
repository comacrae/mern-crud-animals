import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "./Container";
import AnimalTable from "./animalTable";
import CustomButton from "./customButton";

export default function ShowAnimalList() {
  const [animalsArray, setAnimalsArray] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/api/animals/");
      setAnimalsArray(res.data);
    };
    getData();
  }, []);

  function renderEmpty() {
    return (
      <>
        <h1 className="display">No animals exist yet.</h1>
        <p>Create one by clicking the button below.</p>
      </>
    );
  }

  return (
    <Container>
      {animalsArray.length === 0 ? (
        renderEmpty()
      ) : (
        <>
          <h1 className="display">Welcome to the Jungle!</h1>
          <p>
            Click on an animal's name to update their information or delete them
            from the list.
          </p>
          <AnimalTable animals={animalsArray} />
        </>
      )}
      <CustomButton>
        <Link
          to="/create-animal"
          style={{ textDecoration: "none", color: "white" }}
        >
          Create New Animal
        </Link>
      </CustomButton>
    </Container>
  );
}
