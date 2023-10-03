import styled from "styled-components";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  margin: 10px;
  padding: 16px;
  border-radius: 5px;
  width: 100%;
  max-width: 250px;
`;

export const CartSummaryTitle = styled(Typography)`
  margin-bottom: 16px;
  text-decoration: underline;
  font-weight: bold;
`;

export const SummaryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
