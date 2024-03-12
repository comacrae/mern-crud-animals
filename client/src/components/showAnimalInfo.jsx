import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import CustomButton from "./customButton";
import AnimalInfoCard from "./animalInfoCard";

export default function ShowAnimalInfo({ props }) {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({});
  const { id } = useParams();
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
  const deleteAnimal = () => {
    axios
      .delete(`http://localhost:3000/api/animals/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <AnimalInfoCard animal={animal}></AnimalInfoCard>
      <div className="d-grid">
        <div className="row">
          <div className="col-2">
            <CustomButton onClick={deleteAnimal} testId="deleteAnimalButton">
              Delete Animal
            </CustomButton>
          </div>
          <div className="col-2">
            <CustomButton testId="editAnimalButton">
              <Link
                to={`/edit-animal/${id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Update Animal
              </Link>
            </CustomButton>
          </div>
        </div>
      </div>
    </Container>
  );
}
