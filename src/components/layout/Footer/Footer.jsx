import { Box, Typography } from "@mui/material";
import LogoTM from "../../../assets/logotm.svg";
import TagLine from "../../../assets/tagline.svg";

// Social Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

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
              mt: 2,
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
          <Box
            sx={{
              mt: 2,
              "& svg": { fontSize: "40px", cursor: "pointer", mr: "1" },
              "& svg:hover": {
                color: "goldenrod",
                transform: "translateX(5px)",
                transition: "all 400ms",
              },
              "@media (max-width: 600px)": {
                mt: 1,
                display: "flex",
                justifyContent: "center ",
              },
            }}
          >
            <InstagramIcon fontSize="small" />
            <YouTubeIcon fontSize="small" />
            <TwitterIcon fontSize="small" />
            <GitHubIcon fontSize="small" />
          </Box>
        </Box>
        {/* Copyright */}
        <Typography
          variant="h6"
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
