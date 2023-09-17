import { Box } from "@mui/material";

import Layout from "../components/layout/Layout";
import FilterButtons from "../components/menu/FilterButtons";
import MenuCard from "../components/menu/Card/MenuCard";
import CartButton from "../components/menu/Cart/CartButton";
import PaginationComp from "../components/menu/PaginationComp";

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
  {
    id: 4,
    name: "Cholle Bhature",
    category: "indian",
    description: "This dish is very delicious and very famous in India. ",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218359/resto/menu/indian/cholle-bhature.jpg",
    price: 70,
  },
  {
    id: 5,
    name: "Sev Bhel",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218229/resto/menu/indian/sev-bhel.jpg",
    price: 250,
  },
  {
    id: 6,
    name: "Hyderabadi Biryani",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218162/resto/menu/indian/hyderabadi-biryani.webp",
    price: 500,
  },
  {
    id: 7,
    name: "Paani Puri",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218204/resto/menu/indian/paani-puri.jpg",
    price: 40,
  },
  {
    id: 8,
    name: "Egg Dosa",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218020/resto/menu/indian/egg-dosa.jpg",
    price: 80,
  },
  {
    id: 9,
    name: "Idli",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690217978/resto/menu/indian/idli.jpg",
    price: 50,
  },
  {
    id: 10,
    name: "Vada Pav",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690217474/resto/menu/indian/vada-pav.jpg",
    price: 20,
  },
  {
    id: 11,
    name: "Rice",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690217334/resto/menu/indian/rice.jpg",
    price: 60,
  },
  {
    id: 12,
    name: "Aloo Gobi",
    category: "indian",
    description: "This dish is very delicious and very famous in India.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690217113/resto/menu/indian/aloo-gobi.jpg",
    price: 80,
  },
  {
    id: 13,
    name: "Mapo Tofu",
    category: "chinese",
    description: "This dish is very delicious and very famous in China.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218777/resto/menu/chinese/mapo-tofu.png",
    price: 110,
  },
  {
    id: 14,
    name: "Dumplings",
    category: "chinese",
    description: "This dish is very delicious and very famous in China.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218680/resto/menu/chinese/dumplings.jpg",
    price: 145,
  },
  {
    id: 15,
    name: "Spring Roll",
    category: "chinese",
    description: "This dish is very delicious and very famous in China.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218540/resto/menu/chinese/spring-roll.jpg",
    price: 90,
  },
  {
    id: 16,
    name: "Chow Mein",
    category: "chinese",
    description: "This dish is very delicious and very famous in China.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218497/resto/menu/chinese/chow-mein.jpg",
    price: 130,
  },
  {
    id: 17,
    name: "Shrimp Risotto",
    category: "italian",
    description: "This dish is very delicious and very famous in Italy.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690219038/resto/menu/italian/shrimp-risotto.jpg",
    price: 175,
  },
  {
    id: 18,
    name: "Tiramisu",
    category: "italian",
    description: "This dish is very delicious and very famous in Italy.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218958/resto/menu/italian/tiramisu.jpg",
    price: 160,
  },
  {
    id: 19,
    name: "Veg Pasta",
    category: "italian",
    description: "This dish is very delicious and very famous in Italy.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218884/resto/menu/italian/veg-pasta.jpg",
    price: 160,
  },
  {
    id: 20,
    name: "Pizza",
    category: "italian",
    description: "This dish is very delicious and very famous in Italy.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690218831/resto/menu/italian/pizza.jpg",
    price: 200,
  },
];

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          p: 2,
        }}
      >
        {/* Filter & Cart Button */}
        <Box>
          <FilterButtons />
          <CartButton />
        </Box>
        {/* Menu */}
        <MenuCard menuList={menuList} />
        {/* Pagination */}
        <PaginationComp />
      </Box>
    </Layout>
  );
};

export default Menu;
