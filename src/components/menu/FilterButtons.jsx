import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

var categoryList = ["japanese", "indian", "chinese", "italian"];

const FilterButtons = () => {
  const handleFilter = () => {
    console.log("Clicked on HandleFilter");
  };

  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      sx={{ position: "fixed", mx: "2" }}
    >
      <Button key="all" id="all" variant="outlined" onClick={handleFilter}>
        All
      </Button>
      {categoryList.map((cat) => (
        <Button key={cat} id={cat} variant="outlined" onClick={handleFilter}>
          {cat}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
