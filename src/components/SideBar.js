import Link from "./Link";

import React from "react";

function SideBar() {
  const links = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-scroll flex flex-col">
      {renderLinks}
    </div>
  );
}

export default SideBar;
