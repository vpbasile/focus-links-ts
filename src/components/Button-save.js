import React from "react";

export default function ButtonSave(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.saveData()}
    >
      <span className="visually-hidden">Show </span>
      <span>Save Data</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}