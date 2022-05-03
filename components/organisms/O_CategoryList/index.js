import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Container,
  SubContainer,
  StyledButton,
  Spinner,
  StyledH2,
} from "./style";

const Index = (props) => {
  const { myCategoryList, idCategory, selectCategory } = props;
  const parent = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const slider = parent.current;

    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    let stopDragging = function (event) {
      mouseDown = false;
    };

    slider.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  }, []);

  return (
    <>
      <Container>
        <StyledH2>
          Select Category
          <Image
            src="/images/reset.png"
            alt="reset"
            width={25}
            height={25}
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.reload(window.location.pathname);
            }}
          />
        </StyledH2>
        <SubContainer ref={parent}>
          {myCategoryList?.dataCategory?.length > 0 ? (
            myCategoryList.dataCategory.map((value, idx) => {
              return (
                <StyledButton
                  isActive={idCategory === value.id}
                  onClick={() => selectCategory(value.id)}
                  key={idx}
                >
                  {value.name}
                </StyledButton>
              );
            })
          ) : (
            <Spinner></Spinner>
          )}
        </SubContainer>
      </Container>
    </>
  );
};

export default Index;
