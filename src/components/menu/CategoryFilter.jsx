import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import {
  filterByCategory,
  selectSelectedCategory,
} from "../../features/menuSlice";
import { setTotalPages, setCurrentPage } from "../../features/paginationSlice";
import { store } from "../../store/store";
import { motion } from "framer-motion";

const CategoryFilter = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  fetch("http://localhost:3000/category")
    .then((response) => response.json())
    .then((data) => {
      setCategories(data);
      setIsLoading(false);
    });

  // Function to handle button clicks and set the active button
  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));

    const newTotalPages = Math.ceil(
      store.getState().menu.filteredMenus.length /
        store.getState().pagination.itemsPerPage
    );
    dispatch(setTotalPages(newTotalPages));
    dispatch(setCurrentPage(1));
  };

  return isLoading ? (
    <div>Loading categories...</div>
  ) : (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      // sx={{ position: "fixed", mx: 2, my: 3 }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          id={category}
          variant={
            selectedCategory === `${category}` ? "contained" : "outlined"
          }
          onClick={() => handleCategoryClick(category)}
        >
          <motion.div
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
          >
            {category}
          </motion.div>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default CategoryFilter;
