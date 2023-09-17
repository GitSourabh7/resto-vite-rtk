import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

var categoryList = ["japanese", "indian", "chinese", "italian"];

const FilterButtons = () => {
  const [activeButton, setActiveButton] = useState("all");

  // Function to handle button clicks and set the active button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      sx={{ position: "fixed", mx: 2, my: 3 }}
    >
      <Button
        key="all"
        id="all"
        variant={activeButton === "all" ? "contained" : "outlined"}
        onClick={() => handleButtonClick("all")}
      >
        All
      </Button>
      {categoryList.map((cat) => (
        <Button
          key={cat}
          id={cat}
          variant={activeButton === `${cat}` ? "contained" : "outlined"}
          onClick={() => handleButtonClick(cat)}
        >
          {cat}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
