import React, { useEffect, useState } from "react";
import O_PopUpBook from "../O_PopUpBook";
import A_ResetButton from "../../atom/A_ResetButton";
import Router from "next/router";
import Link from "next/link";
import {
  Container,
  CardBook,
  CardContainer,
  BookmarkContainer,
  SubCardContainer,
  StyledSelect,
  StyledOption,
} from "./style";

const Index = (props) => {
  const { myBook, selectSize, myCategoryList, title, isBookmark } = props;
  const [popUpDetail, setPopUpDetail] = useState(false);
  const [detailBook, setDetailBook] = useState();

  const showDetail = (data) => {
    setPopUpDetail(true);
    setDetailBook(data);
  };

  return (
    <>
      {popUpDetail && (
        <O_PopUpBook
          isBookmark={isBookmark}
          detailBook={detailBook}
          setPopUpDetail={setPopUpDetail}
        />
      )}
      <Container>
        <BookmarkContainer>
          <h2>{title}</h2>
          {!isBookmark ? (
            <div>
              <StyledSelect
                onChange={(e) => {
                  selectSize(e.target.value);
                }}
              >
                <StyledOption disabled selected="selected">
                  Select size
                </StyledOption>
                <StyledOption value={5}>5</StyledOption>
                <StyledOption value={10}>10</StyledOption>
              </StyledSelect>
            </div>
          ) : (
            <>
              <A_ResetButton
                onClick={() => {
                  localStorage.removeItem("bookmark");
                  Router.reload(window.location.pathname);
                }}
              >
                Reset Bookmark
              </A_ResetButton>
            </>
          )}
        </BookmarkContainer>

        <SubCardContainer>
          {myBook?.length > 0 ? (
            myBook?.map((value, idx) => {
              return (
                <CardBook
                  key={idx}
                  onClick={() => {
                    showDetail(value);
                  }}
                >
                  <img src={value.cover_url} alt="book cover" width={250} />
                  <CardContainer>
                    <h4>
                      <b>{value.authors}</b>
                    </h4>
                    {myCategoryList.dataCategory.map((v, idx) => {
                      return (
                        <p key={idx}>{v.id === value.category_id && v.name}</p>
                      );
                    })}
                  </CardContainer>
                </CardBook>
              );
            })
          ) : (
            <CardBook dataEmpty>DATA DOES NOT EXIST</CardBook>
          )}
        </SubCardContainer>
      </Container>
    </>
  );
};

export default Index;
