import React, { useEffect, useState } from "react";
import O_ListBook from "../components/organisms/O_ListBook";
import A_ResetButton from "../components/atom/A_ResetButton";
import { connect } from "react-redux";
import Router from "next/router";
import actions from "../redux/actions";
import Link from "next/link";

const BookMark = ({ myCategoryList }) => {
  const [bookmark, setBookmark] = useState();

  useEffect(() => {
    setBookmark(JSON.parse(localStorage.getItem("bookmark")));
  }, []);

  return (
    <>
      <div style={{ margin: "24px 0px 0px 24px" }}>
        <Link href="/">
          <a>
            <img src="/images/back.svg" alt="Back" />
          </a>
        </Link>
      </div>

      <O_ListBook
        myBook={bookmark}
        myCategoryList={myCategoryList}
        title="List Bookmark"
        isBookmark={true}
      />
    </>
  );
};

BookMark.getInitialProps = async (ctx) => {
  await ctx.store.dispatch(actions.getListCategory());
  return {};
};

const mapStateToProps = (state) => {
  return {
    myCategoryList: state.category,
    myBook: state.books.bookData,
    allBookData: state.books.allBookData,
  };
};

export default connect(mapStateToProps, actions)(BookMark);
