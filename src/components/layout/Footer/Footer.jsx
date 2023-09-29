import { Box, Typography } from "@mui/material";
import SocialIcons from "./SocialIcons/SocialIcons";
import LogoTM from "../../../assets/logotm.svg";
import TagLine from "../../../assets/tagline.svg";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#1976d2", color: "White" }}>
        <Box
          sx={{
            display: "flex",
            px: 2,
            justifyContent: "space-between",
            "@media (max-width: 600px)": { flexDirection: "column" },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 600px)": { p: 1 },
            }}
          >
            <img src={LogoTM} alt="logotm" width={"150px"} />
            <img src={TagLine} alt="tagline" />
          </Box>

          {/* Social Icons */}
          <SocialIcons sx={{ display: "flex", justifyContent: "center" }} />
        </Box>
        {/* Copyright */}
        <Typography
          variant="h8"
          sx={{
            display: "flex",
            "@media (max-width: 600px)": { fontSize: "1rem" },
            alignSelf: "end",
            justifyContent: "center",
            p: 1,
          }}
        >
          All Rights Reserved &copy; Resto Ltd.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
