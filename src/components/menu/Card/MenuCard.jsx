import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CardButtons from "./CardButtons";

var menuList = [
  {
    id: 1,
    name: "Tempura",
    category: "japanese",
    description: "This dish is very delicious and very famous in Japan.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690219271/resto/menu/japanese/tempura.jpg",
    price: 200,
  },
  {
    id: 2,
    name: "Ramen",
    category: "japanese",
    description: "This dish is very delicious and very famous in Japan.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690219188/resto/menu/japanese/ramen.jpg",
    price: 300,
  },
  {
    id: 3,
    name: "Sushi",
    category: "japanese",
    description: "This dish is very delicious and very famous in Japan.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690219153/resto/menu/japanese/sushi.jpg",
    price: 50,
  },
];
const MenuCard = () => {
  return menuList.map((menu) => (
    <Card
      key={menu.name} // Used name as key
      sx={{
        maxWidth: "400px",
        display: "flex",
        m: 2,
        borderRadius: "10px",
      }}
    >
      <CardContent
        sx={{
          marginBottom: "-35px",
          "&:hover": {
            background: "#9c96960f",
          },
        }}
      >
        <CardMedia
          sx={{ minHeight: "400px", borderRadius: "20px" }}
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
            top: "-45px",
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
        <CardButtons menu={menu} />
      </CardContent>
    </Card>
  ));
};

export default MenuCard;
