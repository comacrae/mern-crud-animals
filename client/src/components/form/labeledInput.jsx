import React from "react";

export default function LabeledInput({
  type,
  label,
  name,
  onChange,
  value,
  testId,
}) {
  return (
    <div className="row">
      <div className="col-2">
        <label className="fw-bold" htmlFor={name}>
          {label}
        </label>
      </div>
      <div className="col-4">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          data-testid={testId}
        ></input>
      </div>
    </div>
  );
}
