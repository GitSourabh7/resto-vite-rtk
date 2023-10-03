import styled from "styled-components";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const LoadingMessage = styled.div`
  color: #333;
  font-size: 18px;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  && {
    ${(props) =>
      props.variant === "contained" &&
      `
      background-color: #1976d2;
      color: white;
    `};
  }
`;
