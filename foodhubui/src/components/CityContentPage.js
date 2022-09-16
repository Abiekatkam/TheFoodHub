import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import CardCity from "./CardCity";

export default function CityContentPage({ data }) {
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
    <SectionContent>
      <div className="container">
        <div className="displayer">
          {currentItems.map((item) => {
            return (
              <CardCity
                key={item._id}
                id={item._id}
                img={item.image}
                name={item.name}
                cuisine={item.cuisine}
                city={item.city}
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
    </SectionContent>
  );
}

const SectionContent = styled.section`
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
