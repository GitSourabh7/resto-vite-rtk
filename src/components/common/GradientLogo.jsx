import FancyText from "@carefully-coded/react-text-gradient";
import { HeaderText } from "./GradientLogo.styled";

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
