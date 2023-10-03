import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardButtons from "./CardButtons";
import { selectMenus } from "../../../features/menuSlice";
import { store } from "../../../store/store";
import {
  StyledBox,
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  DescriptionBox,
  StyledTypography,
  DescriptionText,
  ShowMoreText,
} from "./MenuCard.styled"; // Import the styled components

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

    // Reset showFullDescriptions to all false when currentPage changes
    setShowFullDescriptions(menus.map(() => false));
  }, [menus, currentPage]);

  const toggleDescription = (index) => {
    const updatedDescriptions = [...showFullDescriptions];
    updatedDescriptions.fill(false); // Reset all descriptions to false
    updatedDescriptions[index] = true; // Toggle the clicked description
    setShowFullDescriptions(updatedDescriptions);
  };

  return (
    <StyledBox ref={containerRef}>
      {menus.slice(firstItem, lastItem).map((menu, index) => (
        <motion.div whileHover={{ scale: 1.02 }} key={menu.name}>
          <StyledCard key={menu.name}>
            <StyledCardContent>
              <StyledCardMedia
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <DescriptionBox>
                <StyledTypography>{menu.name}</StyledTypography>
                <DescriptionText
                  showFull={showFullDescriptions[index]}
                  onClick={() => toggleDescription(index)}
                >
                  {menu.description}
                </DescriptionText>
                {!showFullDescriptions[index] && (
                  <ShowMoreText
                    variant="body2"
                    color="primary"
                    onClick={() => toggleDescription(index)}
                  >
                    Show more
                  </ShowMoreText>
                )}
              </DescriptionBox>
              <CardButtons item={menu} />
            </StyledCardContent>
          </StyledCard>
        </motion.div>
      ))}
    </StyledBox>
  );
};

export default MenuCard;
