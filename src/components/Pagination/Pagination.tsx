import ReactPaginate from "react-paginate";
import type { ComponentProps } from "react";

import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  forcePage: number;
  onPageChange: ComponentProps<typeof ReactPaginate>["onPageChange"];
}

export default function Pagination({
  pageCount,
  forcePage,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      previousLabel="←"
      nextLabel="→"
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}
