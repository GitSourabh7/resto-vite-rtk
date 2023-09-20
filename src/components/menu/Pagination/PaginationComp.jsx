import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "./PaginationSlice";

const PaginationComp = () => {
  // Use useSelector to get the totalPages value from the Redux store
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const dispatch = useDispatch();

  const page = useSelector((state) => state.pagination.currentPage);

  const handlePageChange = (event, page) => {
    console.log("Handle Pagination");

    // Dispatch the setPage action with the new page number
    dispatch(setCurrentPage(page));
  };

  return (
    <Pagination
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      size="large"
      page={page}
      count={totalPages}
      onChange={handlePageChange}
    />
  );
};

export default PaginationComp;
