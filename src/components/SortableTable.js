import React from "react";
import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const handleClick = (label) => {
    console.log(label);
  };

  const updatedConfing = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} Is SortableTable
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfing} />;
}

export default SortableTable;
