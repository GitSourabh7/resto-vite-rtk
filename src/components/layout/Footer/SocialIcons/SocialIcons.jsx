import { Box } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { SocialIconLink, IconContainer, Icon } from "./SocialIcons.styled"; // Import styled components

const SocialIcons = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <FacebookOutlinedIcon fontSize="large" />,
      url: "https://www.facebook.com/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon fontSize="large" />,
      url: "https://www.instagram.com/",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon fontSize="large" />,
      url: "https://www.twitter.com/",
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon fontSize="large" />,
      url: "https://www.youtube.com/",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon fontSize="large" />,
      url: "https://github.com/",
    },
  ];

  return (
    <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
      {socialMediaLinks.map((socialMedia, index) => (
        <SocialIconLink
          key={index}
          href={socialMedia.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Icon className="icon">{socialMedia.icon}</Icon>
          </IconContainer>
        </SocialIconLink>
      ))}
    </Box>
  );
};

export default SocialIcons;
