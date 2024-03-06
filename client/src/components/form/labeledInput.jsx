import React from "react";

export default function LabeledInput({ type, label, name, onChange, value }) {
  return (
    <div className="row">
      <div className="col-2">
        <label className="fw-bold">{label}</label>
      </div>
      <div className="col-4">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
}
