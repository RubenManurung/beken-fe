import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import O_Accordion from "../O_Accordion";
import {
  Modal,
  ModalInner,
  ButtonFlex,
  PrLineButton,
  StyledSubContainer,
  BookmarkContainer,
  TitleContainer,
  BottomContainer,
  ImageCover,
} from "./style";

const Index = (props) => {
  const { detailBook, setPopUpDetail } = props;
  const [toggleBookmark, setToggleBookmark] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    dispathBookmark();
  }, [toggleBookmark]);

  const dispathBookmark = () => {
    dispatch({
      type: "is_bookmark",
      payload: JSON.parse(
        typeof window !== "undefined" && localStorage.getItem("bookmark")
      ),
    });
  };

  return (
    <div>
      <Modal>
        <ModalInner>
          <div>
            <ImageCover src={detailBook.cover_url} alt="cover book" />
            <StyledSubContainer>
              <BookmarkContainer>
                <TitleContainer>
                  <h2>{detailBook.title}</h2>
                  <span>{detailBook.authors.join(", ")}</span>
                </TitleContainer>

                {toggleBookmark ? (
                  <img
                    src="/images/solid-bookmark.svg"
                    alt="solid bookmark"
                    width={40}
                    height={40}
                    onClick={() => {
                      setToggleBookmark(!toggleBookmark);
                    }}
                  />
                ) : (
                  <img
                    src="/images/bookmark.svg"
                    alt="outline bookmark"
                    width={50}
                    height={40}
                    onClick={() => {
                      setToggleBookmark(!toggleBookmark);

                      let data2;
                      if (localStorage.getItem("bookmark")) {
                        data2 = JSON.parse(localStorage.getItem("bookmark"));
                        data2.unshift(detailBook);
                        localStorage.setItem("bookmark", JSON.stringify(data2));
                      } else {
                        localStorage.setItem(
                          "bookmark",
                          JSON.stringify([detailBook])
                        );
                      }
                    }}
                  />
                )}
              </BookmarkContainer>

              <hr />
              <span>🧾 {detailBook.sections.length} Chapter </span>
              <span style={{}}>
                ⏳ {Math.floor(detailBook.audio_length / 60)} min
              </span>
              <hr />
              <br />
              <h3>What is About?</h3>
              <p>{detailBook.description}</p>
            </StyledSubContainer>
          </div>

          <BottomContainer>
            <h3>Whait is Inside?</h3>

            {detailBook.sections.map((value, idx) => {
              return (
                <O_Accordion key={idx} title={value.title} number={idx}>
                  <p>{value.content}</p>
                </O_Accordion>
              );
            })}
          </BottomContainer>

          <ButtonFlex>
            <PrLineButton
              onClick={() => {
                setPopUpDetail(false);
                setToggleBookmark(false);
              }}
            >
              Close
            </PrLineButton>
          </ButtonFlex>
        </ModalInner>
      </Modal>
    </div>
  );
};

export default Index;
