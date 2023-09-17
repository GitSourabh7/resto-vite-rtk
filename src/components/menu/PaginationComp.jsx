import Pagination from "@mui/material/Pagination";

const PaginationComp = () => {
  const pageSize = 5;
  const handlePagination = () => {
    console.log("Handle Pagination");
  };

  return (
    <Pagination
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        marginLeft: 15,
      }}
      size="large"
      count={pageSize}
      onChange={handlePagination}
      hidePrevButton
      hideNextButton
    />
  );
};

export default PaginationComp;
