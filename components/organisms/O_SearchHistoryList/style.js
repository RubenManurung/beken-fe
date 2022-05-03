import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding: 24px;
  max-width: 1440px;
  width: 100%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HistorySearch = styled.div`
  cursor: pointer;
  ${"" /* border: 1px solid blue; */}
  color: #78909c;
  ${"" /* font-weight: 500; */}
`;
