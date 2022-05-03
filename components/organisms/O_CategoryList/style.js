import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 24px;
  max-width: 1440px;
  width: 100%;
`;

export const StyledH2 = styled.h2`
  display: flex;
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  height: auto;
  overflow-x: scroll;

  mix-blend-mode: normal;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for IE, Edge and Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 900px) {
    ${"" /* font-size: ; */}
  }
`;

export const StyledButton = styled.button`
  border: 1px solid gray;
  border-radius: 24px;
  background: #fff;
  cursor: pointer;
  margin: 4px 4px;
  padding: 12px;
  font-size: 12px;

  background: ${({ isActive }) => (isActive ? "#222C65" : "")};
  color: ${({ isActive }) => (isActive ? "white" : "")};

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
    white-space: nowrap;
    margin: 4px 8px;
  }
`;

export const Spinner = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  &:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
    animation: spin 0.5s infinite linear;
  }

  &:after {
    width: 85%;
    height: 85%;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
