import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "./PaginationSlice";

const PaginationComp = () => {
  const dispatch = useDispatch();

  // Get currentPage and totalPages from the Redux store
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);

  // Handle page change
  const handlePageChange = (event, newPage) => {
    // Dispatch the setCurrentPage action with the new page number
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "2px solid #1976d2", // Customize the outer border color and style
        borderRadius: "40px", // Add rounded corners if desired
        padding: "8px", // Add some padding for spacing
        marginTop: "10px",
      }}
    >
      <Pagination
        color="primary"
        size="large"
        page={currentPage}
        count={totalPages}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComp;
