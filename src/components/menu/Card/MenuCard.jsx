import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CardButtons from "./CardButtons";
import { selectMenus } from "../../../features/menuSlice";
import { store } from "../../../store/store";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const StyledCard = styled(Card)`
  max-width: 330px;
  display: flex;
  margin: 2px;
  border-radius: 10px;

  &:hover {
    background: #9c96960f;
  }
`;

const StyledCardContent = styled(CardContent)`
  margin-bottom: -75px;
`;

const StyledCardMedia = styled(CardMedia)`
  min-height: 300px;
  border-radius: 20px;
`;

const DescriptionBox = styled(Box)`
  text-align: center;
  background-color: #c5ccc5c4;
  padding: 15px;
  position: relative;
  top: -50px;
  margin: 10px;
  border-radius: 30px;
`;

const StyledTypography = styled(Typography)`
  font-family: cursive;
`;

const DescriptionText = styled(Typography)`
  height: ${(props) => (props.showFull ? "auto" : "100px")};
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  margin-bottom: ${(props) => (props.showFull ? "0" : "15px")};
  cursor: pointer;
`;

const ShowMoreText = styled(Typography)`
  cursor: pointer;
`;

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
                <StyledTypography variant="h5" gutterBottom>
                  {menu.name}
                </StyledTypography>
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
