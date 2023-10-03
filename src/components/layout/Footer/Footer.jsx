import SocialIcons from "./SocialIcons/SocialIcons";
import LogoTM from "../../../assets/logotm.svg";
import TagLine from "../../../assets/tagline.svg";

import {
  FooterContainer,
  FooterContent,
  LogoContainer,
  LogoImage,
  CopyrightText,
} from "./Footer.styled";

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
