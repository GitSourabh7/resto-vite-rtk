import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const FooterContainer = styled(Box)`
  background-color: #1976d2;
  color: white;
`;

export const FooterContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled(Box)`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin-bottom: -0.5rem;
  }
`;

export const LogoImage = styled.img`
  width: 150px;
`;

export const CopyrightText = styled(Typography)`
  display: flex;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  align-self: end;
  justify-content: center;
  padding: 0 0 1rem 0;
`;
