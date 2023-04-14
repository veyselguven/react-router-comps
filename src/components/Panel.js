import React from "react";

import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  console.log(rest);

  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    classNames
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
