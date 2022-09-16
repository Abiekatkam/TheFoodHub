import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import Cards from "./Cards";

export default function MenuContentPage({ data }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <Sectioncontent>
      <div className="container">
        <div className="displayer">
          {currentItems.map((item) => {
            return (
              <Cards
                key={item._id}
                id={item._id}
                img={item.image}
                title={item.name}
                type={item.meal_type}
                content={item.content}
              />
            );
          })}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </Sectioncontent>
  );
}

const Sectioncontent = styled.section`
  .displayer {
    display: flex;
    flex-wrap: wrap;
  }

  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    font-size: 1.2rem;
    gap: 5px;
  }

  .pagination .page-num {
    color: var(--blue);
    padding: 4px 15px;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 400px;
  }

  .pagination .page-num:hover {
    background-color: var(--lightbs);
    transition: 0.3s all ease;
  }
`;
