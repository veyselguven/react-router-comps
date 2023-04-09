import React from "react";
import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  console.log(items);
  const renderedItem = items.map((item, index) => {
    // if (index === expandedIndex) {
    //   console.log("expanded");
    // } else {
    //   console.log("collapsed");
    // }

    const isExpanded = index === expandedIndex;

    console.log(isExpanded);
    return (
      <div key={index}>
        <div>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItem}</div>;
}

export default Accordion;
