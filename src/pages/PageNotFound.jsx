import Layout from "../components/layout/Layout";
import { StyledBox, LottiePlayerWrapper } from "./PageNotFound.styled";

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
