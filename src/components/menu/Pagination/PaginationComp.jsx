import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { setCurrentPage } from "../../../features/paginationSlice";
import { motion } from "framer-motion";

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
        border: "2px solid #1976d2",
        borderRadius: "40px",
        padding: "8px",
        margin: "10px",
      }}
    >
      <Pagination
        color="primary"
        size="medium"
        page={currentPage}
        count={totalPages}
        onChange={handlePageChange}
        renderItem={(item) => (
          <motion.div
            whileHover={{ scale: 1.1 }} // Apply scale animation on hover
            key={item.page}
          >
            <PaginationItem {...item} />
          </motion.div>
        )}
      />
    </div>
  );
};

export default PaginationComp;
