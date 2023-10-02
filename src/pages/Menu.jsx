import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";

// Mui
import { Box } from "@mui/material";
import Layout from "../components/layout/Layout";
import CategoryFilter from "../components/menu/CategoryFilter";
import MenuCard from "../components/menu/Card/MenuCard";
import CartButton from "../components/menu/Cart/CartButton";
import PaginationComp from "../components/menu/Pagination/PaginationComp";

// Slice Value
import { setMenus } from "../features/menuSlice";
import { setTotalPages } from "../features/paginationSlice";
import { store } from "../store/store";

const Container = styled(Box)`
  display: grid;
  grid-template-columns: minmax(130px, 130px) 85%;
`;

const CenteredColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidePanel = styled(Box)`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
`;

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
      <Container>
        <CenteredColumn>
          <SidePanel>
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
            >
              <CartButton />
            </motion.div>
            <CategoryFilter />
          </SidePanel>
        </CenteredColumn>
        <CenteredColumn>
          <MenuCard />
          <PaginationComp />
        </CenteredColumn>
      </Container>
    </Layout>
  );
};

export default Menu;
