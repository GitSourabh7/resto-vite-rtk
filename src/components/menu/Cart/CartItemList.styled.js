import styled from "styled-components";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

export const CartItemContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;

  &:hover {
    scale: 1.02;
  }
`;

export const ItemImage = styled.img`
  margin-right: 20px;
  border-radius: 10px;
  height: 100px;
  width: 160px;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const RemoveButtonContainer = styled(motion.div)`
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
