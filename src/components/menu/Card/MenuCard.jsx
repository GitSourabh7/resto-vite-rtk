import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
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

  const containerRef = useRef(null);
  const [showFullDescriptions, setShowFullDescriptions] = useState(
    menus.map(() => false)
  );

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [menus, currentPage]);

  const toggleDescription = (index) => {
    const updatedDescriptions = [...showFullDescriptions];
    updatedDescriptions.fill(false); // Reset all descriptions to false
    updatedDescriptions[index] = true; // Toggle the clicked description
    setShowFullDescriptions(updatedDescriptions);
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingLeft: "100px",
        height: "480px",
        overflowY: "scroll",
      }}
    >
      {menus.slice(firstItem, lastItem).map((menu, index) => (
        <Card
          key={menu.name}
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
                mx: "10px",
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
              <Typography
                variant="body2"
                sx={{
                  height: showFullDescriptions[index] ? "auto" : "100px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  position: "relative",
                  marginBottom: showFullDescriptions[index] ? "0" : "15px",
                  cursor: "pointer",
                }}
                onClick={() => toggleDescription(index)}
              >
                {menu.description}
              </Typography>
              {!showFullDescriptions[index] && (
                <Typography
                  variant="body2"
                  color="primary"
                  onClick={() => toggleDescription(index)}
                  sx={{ cursor: "pointer" }}
                >
                  Show more
                </Typography>
              )}
            </Box>
            <CardButtons item={menu} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MenuCard;
