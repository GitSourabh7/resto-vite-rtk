import Layout from "../components/layout/Layout";
import FilterButtons from "../components/menu/FilterButtons";
import MenuCard from "../components/menu/Card/MenuCard";
import CartButton from "../components/menu/Cart/CartButton";
import PaginationComp from "../components/menu/PaginationComp";

const Menu = () => {
  return (
    <Layout>
      <FilterButtons />
      <CartButton />
      <MenuCard />
      <PaginationComp />
    </Layout>
  );
};

export default Menu;
