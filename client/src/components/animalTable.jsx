import React from "react";
import AnimalCard from "./animalCard";

export default function AnimalTable({ animals }) {
  const animalsList = animals.map((item, index) => {
    return <AnimalCard animal={item} key={index} />;
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Species</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>{animalsList}</tbody>
    </table>
  );
}
