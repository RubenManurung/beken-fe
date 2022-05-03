import React from "react";
import { Container, StyledInput } from "./style";

const Index = (props) => {
  const { placeHolder, ...nativeProps } = props;
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <label>Search Book</label>
        <StyledInput type="text" placeholder={placeHolder} {...nativeProps} />
      </div>
    </Container>
  );
};

export default Index;
