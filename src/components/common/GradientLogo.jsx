import styled from "styled-components";
import FancyText from "@carefully-coded/react-text-gradient";

const HeaderText = styled.h1`
  font-size: 30rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 70px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #1976d2;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
`;

export default function GradientLogo() {
  return (
    <FancyText
      gradient={{ from: "#1976d2", to: "#2d547b", type: "linear" }}
      animateTo={{ from: "#1976d2", to: "#75a5d4" }}
      animateDuration={2000}
    >
      <HeaderText>Resto</HeaderText>
    </FancyText>
  );
}
