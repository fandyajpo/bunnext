"use client";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
function PaginatedItems() {
  const [itemOffset, setItemOffset] = useState(0);

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={"Next"}
        onPageChange={(t) => setItemOffset(t.selected)}
        pageRangeDisplayed={5}
        pageCount={7}
        hrefBuilder={(currentPage) => {
          setItemOffset(currentPage);

          return <Link href={`/shall?user=${itemOffset}`}>Next</Link>;
        }}
        hrefAllControls
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
