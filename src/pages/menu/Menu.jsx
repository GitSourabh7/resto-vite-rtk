import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Mui
import { Box } from "@mui/material";
import Layout from "../../components/layout/Layout";
import CategoryFilter from "../../components/menu/CategoryFilter";
import MenuCard from "../../components/menu/Card/MenuCard";
import CartButton from "../../components/menu/Cart/CartButton";
import PaginationComp from "../../components/menu/Pagination/PaginationComp";

// Slice Value
import { setMenus } from "../menu/MenuSlice";
import { setTotalPages } from "../../components/menu/Pagination/PaginationSlice";
import { store } from "../../store/store";

//styles
import "../menu/MenuStyle.css";

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching menu data from an API
    setTimeout(() => {
      fetch("http://localhost:3000/menu")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setMenus(data));
          dispatch(
            setTotalPages(
              Math.ceil(data.length / store.getState().pagination.itemsPerPage)
            )
          );
        });
    }, 1000);
  }, [dispatch]);

  return (
    <Layout>
      <Box sx={{ p: 2, display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "fixed",
          }}
        >
          <CartButton />
          <CategoryFilter />
        </Box>
        <Box className="menu-container ">
          <MenuCard />
          <PaginationComp />
        </Box>
      </Box>
    </Layout>
  );
};

export default Menu;
