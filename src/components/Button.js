import React from "react";
import className from "classnames";
// let finalClassName = className("px-1.5", {
//   "bg-blue-500": true,
//   "text-yellow-500": false,
// });

// console.log(finalClassName);
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  // let baseClassName = "px-3 py-1.5 border";
  // if (primary) {
  //   baseClassName += "bg-blue-500 border-blue-600 text-white";
  // }else if(secondary){
  // }
  // console.log(rest);
  const classes = className(
    rest.className,
    " flex item-center  px-3  py-3 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-400": outline && primary,
      "text-gray-400": outline && secondary,
      "text-green-400": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-400": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // console.log(props);
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primay,secondary,succes,warning,danger can be true "
      );
    }
  },
};
export default Button;
