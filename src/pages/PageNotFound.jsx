import styled from "styled-components";
import Layout from "../components/layout/Layout";
import { Box } from "@mui/material";
import "@lottiefiles/lottie-player";

// Styling for outer Box
const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

// Define a CSS class for styling the lottie-player
const LottiePlayerWrapper = styled.div`
  width: 680px;
  display: flex;
  justify-content: center;
`;

const PageNotFound = () => {
  return (
    <Layout>
      <StyledBox>
        <LottiePlayerWrapper>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/e439b133-24af-43c6-b59b-434046fad0ad/MlOCktSwXL.json"
          ></lottie-player>
        </LottiePlayerWrapper>
      </StyledBox>
    </Layout>
  );
};

export default PageNotFound;
