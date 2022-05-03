import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 24px;
  max-width: 1440px;
  width: 100%;
`;

export const CardBook = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: ${({ dataEmpty }) => (dataEmpty ? "100%" : "250px")};
  height: auto;
  margin: 16px auto;
  ${({ dataEmpty }) => dataEmpty && `text-align: center;`};

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardContainer = styled.div`
  padding: 2px 16px;
`;

export const BookmarkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SubCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledSelect = styled.select`
  ${"" /* width: 8rem; */}
  padding: 4px;
`;
export const StyledOption = styled.option``;
