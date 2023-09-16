import Layout from "../components/layout/Layout";
import { Box } from "@mui/material";
import "@lottiefiles/lottie-player";
const PageNotFound = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/e439b133-24af-43c6-b59b-434046fad0ad/MlOCktSwXL.json"
          style={{ width: "680px" }}
        ></lottie-player>
      </Box>
    </Layout>
  );
};

export default PageNotFound;
