import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { setCurrentPage } from "../../../features/paginationSlice";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../styles/theme.styled";

// Styled components
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid ${colors.primaryColor};
  border-radius: 40px;
  padding: 8px;
  margin: 10px;
`;

// React component
const PaginationComp = () => {
  const dispatch = useDispatch();

  // Get currentPage and totalPages from the Redux store
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);

  // Handle page change
  const handlePageChange = (event, newPage) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Dispatch the setCurrentPage action with the new page number
    dispatch(setCurrentPage(newPage));
  };

  return (
    <PaginationWrapper>
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
    </PaginationWrapper>
  );
};

export default PaginationComp;
