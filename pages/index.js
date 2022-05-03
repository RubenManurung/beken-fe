import React, { useEffect, useState, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import O_Search from "../components/organisms/O_Search";
import O_SearchHistoryList from "../components/organisms/O_SearchHistoryList";
import O_CategoryList from "../components/organisms/O_CategoryList";
import O_ListBook from "../components/organisms/O_ListBook";
import O_BookMark from "../components/organisms/O_BookMark";
import actions from "../redux/actions";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${"" /* CHANGE COLOR ACTIVE PAGINATION LIBRARY */}

  ul.pagination li.active a {
    background: #e3f4fc;
    border-radius: 4px;
    color: #12608f;
  }

  ul.pagination li:first-child {
    display: none;
  }
  ul.pagination li:last-child {
    display: none;
  }

  ${"" /* CHANGE COLOR PAGINATION LIBRARY */}
  a {
    color: #7b7b7c;
  }
`;

const SubPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = (props) => {
  const { myCategoryList, myBook, allBookData } = props;
  const [searchHistory, setSearchHistory] = useState("");
  const [listSearchHistory, setListSearchHistory] = useState([]);
  const [isClear, setIsClear] = useState(false);
  const [idCategory, setIdCategory] = useState(1);
  const [page, setPage] = useState(null);
  const [size, setSize] = useState("");
  const [listSearh, setListSearch] = useState([]);

  let dispatch = useDispatch();

  useEffect(() => {
    props.getAllBookCategory(idCategory);
    props.getFilteredBook(idCategory, page, size);
    // setListSearch(
    //   allBookData.filter(
    //     (data) =>
    //       data.title.toLowerCase().includes(searchHistory) ||
    //       data.title.includes(searchHistory) ||
    //       data.authors.join(", ").toLowerCase().includes(searchHistory) ||
    //       data.authors.join(", ").includes(searchHistory)
    //   )
    // );
    dispathBookmark();
  }, [idCategory, page, size]);

  useEffect(() => {
    props.getAllBookCategory(idCategory);
    setListSearch(
      allBookData.filter(
        (data) =>
          data.title.toLowerCase().includes(searchHistory) ||
          data.title.includes(searchHistory) ||
          data.authors.join(", ").toLowerCase().includes(searchHistory) ||
          data.authors.join(", ").includes(searchHistory)
      )
    );
  }, [searchHistory]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      setIsClear(true);
    } else {
      setIsClear(false);
      setSearchHistory("");
    }

    setSearchHistory(value);
  };

  const addSearchHistory = () => {
    listSearchHistory.unshift(searchHistory);
  };

  const deleteSearchHistory = (idx) => {
    let newData = listSearchHistory;
    setListSearchHistory(listSearchHistory.filter((val, i) => i !== idx));
  };

  const selectCategory = (id) => {
    setIdCategory(id);
  };

  const selectSize = (data) => {
    setSize(data);
  };

  const dispathBookmark = () => {
    dispatch({
      type: "is_bookmark",
      payload: JSON.parse(
        typeof window !== "undefined" && localStorage.getItem("bookmark")
      ),
    });
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <O_Search
        placeHolder="Search Books"
        name="searchBook"
        type="text"
        id="searchBook"
        value={searchHistory}
        onChange={handleChange}
        isClear={isClear}
        setIsClear={setIsClear}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setListSearchHistory={setListSearchHistory}
        listSearchHistory={listSearchHistory}
        addSearchHistory={addSearchHistory}
      />
      <O_SearchHistoryList
        setSearchHistory={setSearchHistory}
        listSearchHistory={listSearchHistory}
        deleteSearchHistory={deleteSearchHistory}
      />

      <O_CategoryList
        myCategoryList={myCategoryList}
        selectCategory={selectCategory}
        idCategory={idCategory}
      />

      <O_BookMark />

      <O_ListBook
        myCategoryList={myCategoryList}
        myBook={searchHistory ? listSearh : myBook}
        title="List Book"
        isBookmark={false}
        selectSize={selectSize}
      />

      <PaginationContainer>
        <SubPageContainer>
          {allBookData && (
            <Pagination
              activePage={page}
              itemsCountPerPage={size}
              totalItemsCount={allBookData.length - 1}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          )}
        </SubPageContainer>
      </PaginationContainer>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  await ctx.store.dispatch(actions.getListCategory());
  await ctx.store.dispatch(actions.getAllBookCategory(19));
  return {};
};

const mapStateToProps = (state) => {
  return {
    myCategoryList: state.category,
    myBook: state.books.bookData,
    allBookData: state.books.allBookData,
  };
};

export default connect(mapStateToProps, actions)(Index);
