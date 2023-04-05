import React from "react";

function Accordion({ items }) {
  console.log(items);
  const renderedItem = items.map((item, index) => {
    return (
      <div key={index}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItem}</div>;
}

export default Accordion;
