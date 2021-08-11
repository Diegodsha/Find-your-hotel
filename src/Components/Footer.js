import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from 'react-icons/ti';
import StyledFooter from '../Assets/StyledFooter';
import { BrandName } from '../Assets/StyledHome';

const Footer = () => (
  <StyledFooter className="d-flex flex-column align-items-center">
    <a className="text-dark text-decoration-none" href="#home"><BrandName>SQUARE</BrandName></a>
    <span className="text-secondary my-4">
      Punta Nizuc - Cancún 335, Zona Hotelera, 77500 Cancún, Q.R. +998-825-32-28
    </span>
    <span className="mb-4">
      <a href="#face">
        <TiSocialFacebook className="social facebook" />
      </a>
      <a href="#twit">
        <TiSocialTwitter className="social twitter" />
      </a>
      <a href="#insta">
        <TiSocialInstagram className="social instagram" />
      </a>
    </span>
    <span className="text-secondary">Square 2021. All rights reserved</span>
  </StyledFooter>
);

export default Footer;
