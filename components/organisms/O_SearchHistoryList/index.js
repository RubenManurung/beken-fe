import React from "react";
import Image from "next/image";
import { Container, SubContainer, HistorySearch } from "./style";

const Index = (props) => {
  const { listSearchHistory, deleteSearchHistory, setSearchHistory } = props;

  return (
    <Container>
      {listSearchHistory.length > 0 && (
        <>
          <h2>History Search</h2>

          {listSearchHistory.map((value, idx) => {
            return (
              <SubContainer key={idx}>
                <HistorySearch
                  onClick={() => {
                    setSearchHistory(value);
                  }}
                >
                  {value}
                </HistorySearch>
                <Image
                  style={{ cursor: "pointer" }}
                  src="/images/close.svg"
                  alt="close"
                  width="25"
                  height="25"
                  onClick={() => {
                    deleteSearchHistory(idx);
                  }}
                />
              </SubContainer>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default Index;
