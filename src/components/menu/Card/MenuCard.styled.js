import styled from "styled-components";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

export const StyledCard = styled(Card)`
  max-width: 330px;
  display: flex;
  margin: 2px;
  border-radius: 10px;

  &:hover {
    background: #9c96960f;
  }
`;

export const StyledCardContent = styled(CardContent)`
  margin-bottom: -75px;
`;

export const StyledCardMedia = styled(CardMedia)`
  min-height: 300px;
  border-radius: 20px;
`;

export const DescriptionBox = styled(Box)`
  text-align: center;
  background-color: #c5ccc5c4;
  padding: 15px;
  position: relative;
  top: -50px;
  margin: 10px;
  border-radius: 30px;
`;

export const StyledTypography = styled.h5`
  font-size: 1.4rem;
`;

export const DescriptionText = styled(Typography)`
  height: ${(props) => (props.showFull ? "auto" : "100px")};
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  margin-bottom: ${(props) => (props.showFull ? "0" : "15px")};
  cursor: pointer;
`;

export const ShowMoreText = styled(Typography)`
  cursor: pointer;
`;
