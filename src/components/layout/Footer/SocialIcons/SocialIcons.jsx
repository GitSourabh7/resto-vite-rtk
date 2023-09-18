import { Box, IconButton, Link } from "@mui/material";
// Social Icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./SocialIcons.css";

const SocialIcons = () => {
  const facebookUrl = "https://www.facebook.com/";
  const instagramUrl = "https://www.instagram.com/";
  const twitterUrl = "https://www.twitter.com/";
  const youtubeUrl = "https://www.youtube.com/";
  const githubUrl = "https://www.github.com/";

  return (
    <Box sx={{ mt: 2 }}>
      <Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <IconButton id="iconbutton">
          <FacebookOutlinedIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <IconButton id="iconbutton">
          <InstagramIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <IconButton id="iconbutton">
          <TwitterIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        <IconButton id="iconbutton">
          <YouTubeIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <IconButton id="iconbutton">
          <GitHubIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialIcons;
