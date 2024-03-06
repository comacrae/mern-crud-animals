import React from "react";

export default function CustomButton({
  children,
  type,
  value,
  disabled,
  onClick,
}) {
  return (
    <button
      className="btn btn-primary"
      type={type}
      value={value}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
