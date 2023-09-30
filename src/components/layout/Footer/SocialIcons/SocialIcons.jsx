import { Box, IconButton, Link } from "@mui/material";
import { motion } from "framer-motion";
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
    <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
      <Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          <IconButton id="iconbutton">
            <FacebookOutlinedIcon className="icon" fontSize="large" />
          </IconButton>
        </motion.div>
      </Link>

      <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          <IconButton id="iconbutton">
            <InstagramIcon className="icon" fontSize="large" />
          </IconButton>
        </motion.div>
      </Link>

      <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          <IconButton id="iconbutton">
            <TwitterIcon className="icon" fontSize="large" />
          </IconButton>
        </motion.div>
      </Link>

      <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          <IconButton id="iconbutton">
            <YouTubeIcon className="icon" fontSize="large" />
          </IconButton>
        </motion.div>
      </Link>

      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          <IconButton id="iconbutton">
            <GitHubIcon className="icon" fontSize="large" />
          </IconButton>
        </motion.div>
      </Link>
    </Box>
  );
};

export default SocialIcons;
