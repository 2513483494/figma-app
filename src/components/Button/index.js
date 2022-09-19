import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineLightblueA700:
    "bg-light_blue_A700 border border-light_blue_A700 border-solid text-white_A700",
  OutlineYellow900:
    "bg-yellow_900 border border-solid border-yellow_900 text-white_A700",
  OutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid text-light_blue_A700",
};
const sizes = { sm: "lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "OutlineLightblueA700",
    "OutlineYellow900",
    "OutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  variant: "OutlineLightblueA700",
  size: "sm",
};

export { Button };
