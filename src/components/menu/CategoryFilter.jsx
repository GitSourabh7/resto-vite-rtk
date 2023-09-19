import { useSelector, useDispatch } from "react-redux";
import {
  filterByCategory,
  selectSelectedCategory,
} from "../../pages/menu/MenuSlice";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const categories = ["japanese", "indian", "chinese", "italian"];

const CategoryFilter = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  // Function to handle button clicks and set the active button
  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
  };

  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      sx={{ position: "fixed", mx: 2, my: 3 }}
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
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default CategoryFilter;
