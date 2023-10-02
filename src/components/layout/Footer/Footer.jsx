import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import SocialIcons from "./SocialIcons/SocialIcons";
import LogoTM from "../../../assets/logotm.svg";
import TagLine from "../../../assets/tagline.svg";

const FooterContainer = styled(Box)`
  background-color: #1976d2;
  color: white;
`;

const FooterContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled(Box)`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin-bottom: -0.5rem;
  }
`;

const LogoImage = styled.img`
  width: 150px;
`;

const CopyrightText = styled(Typography)`
  display: flex;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  align-self: end;
  justify-content: center;
  padding: 0 0 1rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo */}
        <LogoContainer>
          <LogoImage src={LogoTM} alt="logotm" />
          <img src={TagLine} alt="tagline" />
        </LogoContainer>

        {/* Social Icons */}
        <SocialIcons sx={{ display: "flex", justifyContent: "center" }} />
      </FooterContent>

      {/* Copyright */}
      <CopyrightText variant="h8">
        All Rights Reserved &copy; Resto Ltd.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
