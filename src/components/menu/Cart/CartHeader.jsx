import { Box, Typography } from "@mui/material";
// eslint-disable-next-line react/prop-types
const CartHeader = ({ count }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#00000022",
        height: "3rem",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ mx: "1em", fontSize: "1.2em", fontWeight: "800" }}>
        Cart : ({count})
      </Typography>
    </Box>
  );
};

export default CartHeader;
