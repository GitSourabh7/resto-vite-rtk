import { styled } from "@mui/system";

export const StyledInputRoot = styled("div")({
  fontFamily: "IBM Plex Sans, sans-serif",
  fontWeight: 400,
  color: (theme) =>
    theme.palette.mode === "dark" ? theme.grey[300] : theme.grey[500],
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
});

export const StyledInput = styled("input")({
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: 400,
  color: (theme) =>
    theme.palette.mode === "dark" ? theme.grey[300] : theme.grey[900],
  background: (theme) =>
    theme.palette.mode === "dark" ? theme.grey[900] : "#fff",
  border: (theme) =>
    `1px solid ${
      theme.palette.mode === "dark" ? theme.grey[700] : theme.grey[200]
    }`,
  borderRadius: "40px",
  margin: "0 2px",
  padding: "3px 3px",
  outline: 0,
  minWidth: 0,
  width: "2.5rem",
  textAlign: "center",
  "&:hover": {
    borderColor: (theme) => theme.blue[400],
  },
  "&:focus": {
    borderColor: (theme) => theme.blue[400],
    boxShadow: (theme) =>
      `0 0 0 3px ${
        theme.palette.mode === "dark" ? theme.blue[500] : theme.blue[200]
      }`,
  },
  "&:focus-visible": {
    outline: 0,
  },
});

export const StyledButton = styled("button")({
  fontFamily: "IBM Plex Sans, sans-serif",
  fontSize: "0.875rem",
  boxSizing: "border-box",
  lineHeight: 1.5,
  border: 0,
  borderRadius: "999px",
  color: (theme) =>
    theme.palette.mode === "dark" ? theme.blue[300] : theme.blue[600],
  background: "transparent",
  width: "28px",
  height: "28px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "120ms",
  "&:hover": {
    background: (theme) =>
      theme.palette.mode === "dark" ? theme.blue[800] : theme.blue[100],
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: 0,
  },
  "&.increment": {
    order: 1,
  },
});
