import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../customButton";
import LabeledInput from "./labeledInput";

export default function AnimalForm({ onChange, onSubmit, animal, noValidate }) {
  return (
    <div className="container m-4">
      <form noValidate={noValidate} onSubmit={onSubmit}>
        <div className="d-grid gap-2">
          <LabeledInput
            name="name"
            label="Animal Name:"
            type="text"
            value={animal.name}
            onChange={onChange}
          />
          <LabeledInput
            name="species"
            label="Animal Species:"
            type="text"
            value={animal.species}
            onChange={onChange}
          />
          <LabeledInput
            name="age"
            label="Animal Age:"
            type="number"
            value={animal.age}
            onChange={onChange}
          />
          <div className="row">
            <div className="col-1">
              <CustomButton type="submit">Submit</CustomButton>
            </div>
            <div className="col-2">
              <CustomButton>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Show Animal List
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
