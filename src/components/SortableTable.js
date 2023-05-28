/* eslint-disable no-unreachable */
import React, { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config } = props;

  const handleClick = (label) => {
    // console.log(label);
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortBy(null);
      setSortOrder(null);
    }
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

  return (
    <div>
      {sortOrder}-{sortBy}
      <Table {...props} config={updatedConfing} />
    </div>
  );
}

export default SortableTable;
