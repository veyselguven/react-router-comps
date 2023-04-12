import React, { useState } from "react";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option) => {
    // close dropdown
    setIsOpen(false);
    // what option did user click on ??
    console.log(option);
  };

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>Select..</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
