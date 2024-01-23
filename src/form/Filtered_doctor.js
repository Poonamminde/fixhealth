import React from "react";

const Select = ({ city }) => {
  return (
    <>
      <lable>Select Doctor:</lable>
      <select style={{ color: "black" }}>
        <option style={{ color: "black" }}>doctor1</option>
        <option style={{ color: "black" }}>doctor2</option>
        <option style={{ color: "black" }}>doctor3</option>
      </select>
    </>
  );
};

export default Select;
