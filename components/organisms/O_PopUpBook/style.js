import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const ModalInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 90vh;
  margin: 1rem auto;
  max-width: 1440px;
  height: auto;
  width: 90%;
  border-radius: 5px;
  background: white;
  text-align: center;
  padding: 1rem 4rem;
  h2,
  p {
    margin: 0 auto;
  }
  h2 {
    color: #009fe3;
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 720px) {
    padding: 1rem;
    ${
      "" /* left: 3%;
    right: 3%; */
    }
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  margin-top: 1.5rem;
  button {
    width: 8rem;
  }
`;

export const PrLineButton = styled.button`
  border: 1px solid #009fe3;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0.75rem 1.75rem;
  width: 12rem;
  font-family: "Avenir Next LT Pro";
  font-size: 1rem;
  color: #009fe3;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #009fe320;
  }
`;

export const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const BookmarkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 16px 0px;
`;

export const BottomContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
  justify-content: center;
`;

export const ImageCover = styled.img`
  width: 350px;
  height: 450px;
  @media only screen and (max-width: 900px) {
    width: 200px;
    height: 400px;
  }
`;
