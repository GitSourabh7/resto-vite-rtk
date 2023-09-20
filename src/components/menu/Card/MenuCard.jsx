/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react"; // Import useEffect and useRef

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CardButtons from "./CardButtons";

import { selectMenus } from "../../../pages/menu/MenuSlice";
import { store } from "../../../store/store";

const MenuCard = () => {
  const menus = useSelector(selectMenus);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const itemsPerPage = store.getState().pagination.itemsPerPage;
  const firstItem = (currentPage - 1) * itemsPerPage;
  const lastItem = firstItem + itemsPerPage;

  // Create a ref for the container element
  const containerRef = useRef(null);

  useEffect(() => {
    // Use the ref to scroll the container to the top
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [menus, currentPage]);

  return (
    <Box
      ref={containerRef} // Assign the ref to the container element
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingLeft: "100px",
        height: "480px",
        overflowY: "scroll",
      }}
    >
      {menus
        .map((menu) => (
          <Card
            key={menu.name} // Used name as key
            sx={{
              maxWidth: "350px",
              display: "flex",
              m: 2,
              borderRadius: "10px",
            }}
          >
            <CardContent
              sx={{
                marginBottom: "-75px",
                "&:hover": {
                  background: "#9c96960f",
                },
              }}
            >
              <CardMedia
                sx={{ minHeight: "300px", borderRadius: "20px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "#c5ccc5c4",
                  padding: "15px",
                  position: "relative",
                  top: "-50px",
                  mx: "25px",
                  borderRadius: "30px",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  component={"div"}
                  sx={{ fontFamily: "cursive" }}
                >
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </Box>
              <CardButtons item={menu} />
            </CardContent>
          </Card>
        ))
        .slice(firstItem, lastItem)}
    </Box>
  );
};

export default MenuCard;
