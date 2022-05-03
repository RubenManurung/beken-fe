import styled from "styled-components";

export const Accordions = styled.button`
  background-color: transparent;
  color: #444;
  cursor: pointer;
  padding: 16px 0px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  transition: 0.4s;
`;

export const Panel = styled.div`
  padding: 0 18px;
  display: none;
  margin-left: 32px;
  background-color: white;
  overflow: hidden;
  p {
    color: #000;
  }
`;
