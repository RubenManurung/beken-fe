import React from "react";
import { ButtonReset } from "./style";

const index = ({ children, ...nativeProps }) => {
  return <ButtonReset {...nativeProps}>{children}</ButtonReset>;
};

export default index;
