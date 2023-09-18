import Pagination from "@mui/material/Pagination";

const PaginationComp = () => {
  const pageSize = 5;
  // const page = 2;
  const handlePagination = () => {
    console.log("Handle Pagination");
  };

  return (
    <Pagination
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      size="large"
      defaultPage={1}
      // page={page}
      count={pageSize}
      onChange={handlePagination}
    />
  );
};

export default PaginationComp;
