import React from "react";
// import { useContext } from "react";
// import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

export default function Link({ to, children }) {
  // const { navigate } = useContext(NavigationContext);
  const { navigate } = useNavigation();

  const classes = classNames("text-blue-500");

  const handleClick = (event) => {
    // console.log(event);
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
