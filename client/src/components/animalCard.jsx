import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = ({ animal, key }) => {
  return (
    <tr>
      <td>
        <Link to={`/show-animal/${animal._id}`}>{animal.name}</Link>
      </td>
      <td>{animal.species}</td>
      <td>{animal.age}</td>
    </tr>
  );
};

export default AnimalCard;
