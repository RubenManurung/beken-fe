import React from "react";
import Image from "next/image";
import A_InputSearch from "../../atom/A_InputSearch";
import { Container, SearchContainer, SubContainer, StyledLabel } from "./style";

const index = (props) => {
  const {
    isClear,
    setIsClear,
    placeHolder,
    value,
    type,
    id,
    setSearchHistory,
    searchHistory,
    setListSearchHistory,
    listSearchHistory,
    addSearchHistory,
    ...nativeProps
  } = props;

  return (
    <Container>
      <SubContainer>
        <div>
          <StyledLabel htmlFor="searchBook">Search Book</StyledLabel>
          <SearchContainer>
            <Image
              src="/images/search.svg"
              alt="search"
              width="25"
              height="25"
            />

            <A_InputSearch
              type={type}
              id={id}
              value={value}
              placeholder={placeHolder}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchHistory("");
                  setIsClear(false);

                  addSearchHistory();
                }
              }}
              {...nativeProps}
            />
            {isClear && (
              <Image
                onClick={() => {
                  setSearchHistory("");
                  setIsClear(false);

                  addSearchHistory();
                }}
                src="/images/close.svg"
                alt="close"
                style={{ cursor: "pointer" }}
                width="25"
                height="25"
              />
            )}
          </SearchContainer>
        </div>
      </SubContainer>
    </Container>
  );
};

export default index;
