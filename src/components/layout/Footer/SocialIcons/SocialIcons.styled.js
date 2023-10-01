import styled from "styled-components";
import { motion } from "framer-motion";
import { IconButton, Link } from "@mui/material";

export const SocialIconLink = styled(Link)`
  display: inline-block;
  margin: 0 10px;
  &:hover {
    .icon {
      background-color: white;
      color: #1976d2;
      border-radius: 50%;
    }
  }
`;

export const IconContainer = styled(motion.div)`
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.9;
  }
`;

export const Icon = styled(IconButton)`
  padding: 0;
  &.icon {
    color: white;
    padding: 2px;
  }
`;
