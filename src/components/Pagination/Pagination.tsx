import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

type Props = {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
};

export default function Pagination({ totalPages, page, setPage }: Props) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={(data) => setPage(data.selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
