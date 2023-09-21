/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

const CartItemList = ({ cartItems }) => {
  const handleRemove = () => {
    console.log("Called remove");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "-webkit-fill-available",
      }}
    >
      {/* Item List */}
      {cartItems.length ? (
        cartItems.map((menu) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#00000022",
              mx: "10px",
              my: "1px",
              borderRadius: "5px",
            }}
            key={menu.id}
          >
            <Box
              component="img"
              sx={{
                m: 2,
                borderRadius: "10px",
                height: 120,
                width: 180,
              }}
              alt={menu.name}
              src={menu.image}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px",
                width: "-webkit-fill-available",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2em",
                  fontWeight: "400",
                  minWidth: "150px",
                }}
              >
                {menu.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  mx: 2,
                  width: "200px",
                }}
              >
                <Box sx={{ ml: "5", fontSize: "1.2em", fontWeight: "400" }}>
                  ₹ {menu.price}
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<Delete />}
                  color="error"
                  size="small"
                  onClick={() => handleRemove(menu)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Cart is empty
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CartItemList;
