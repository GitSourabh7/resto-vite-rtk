import styled from "styled-components";
//MUI components
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

// Styled components
export const AccountButton = styled(IconButton)`
  margin-left: 2px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  padding: 10px;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMenu = styled(Menu)`
  && {
    overflow: visible;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32));
    margin-top: 1.5rem;

    .MuiAvatar-root {
      width: 32px;
      height: 32px;
      margin-left: -0.5rem;
      margin-right: 1rem;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 14px;
      width: 10px;
      height: 10px;
      background-color: "background.paper";
      transform: translateY(-50%) rotate(45deg);
      z-index: 0;
    }
  }
`;
