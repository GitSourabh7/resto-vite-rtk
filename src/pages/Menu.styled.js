import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: minmax(130px, 130px) 85%;
`;

export const CenteredColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidePanel = styled(Box)`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
`;
