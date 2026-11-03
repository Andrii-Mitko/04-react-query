import ReactPaginateModule from "react-paginate";
import type { ComponentProps } from "react";

import css from "./Pagination.module.css";

type PaginateComponent = typeof ReactPaginateModule;

// У production-збірці default-імпорт може бути об'єктом { default: Component }
const ReactPaginate: PaginateComponent =
  (ReactPaginateModule as unknown as { default?: PaginateComponent }).default ??
  ReactPaginateModule;

interface PaginationProps {
  pageCount: number;
  forcePage: number;
  onPageChange: ComponentProps<PaginateComponent>["onPageChange"];
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
