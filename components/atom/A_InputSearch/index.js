import React from "react";
import { StyledInput } from "./style";

const index = (props) => {
  const { type, id, value, placeHolder, ...nativeProps } = props;
  return (
    <StyledInput
      type={type}
      id={id}
      value={value}
      placeholder={placeHolder}
      {...nativeProps}
    />
  );
};

export default index;
