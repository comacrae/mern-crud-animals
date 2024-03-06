import React from "react";
import axios from "axios";

export default function AnimalInfoCard({ animal }) {
  return (
    <>
      <h1 className="display">{animal.name}</h1>
      <div className="d-grid gap-2">
        <div className="row">
          <div className="col-2">
            <div className="row">
              <div className="col-3">
                <p className="fw-bold">Species</p>
              </div>
              <div className="col-2">
                <p>{animal.species}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="fw-bold">Age</p>
              </div>
              <div className="col-2">
                <p>{animal.age}</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img
              src="https://picsum.photos/200/200"
              className="img-thumbnail mb-2"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
