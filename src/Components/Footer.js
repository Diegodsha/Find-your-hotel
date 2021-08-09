import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from 'react-icons/ti';
import StyledFooter from '../Assets/StyledFooter';
import { BrandName } from '../Assets/StyledHome';

const Footer = () => (
  <StyledFooter className="d-flex flex-column align-items-center">
    <BrandName>SQUARE</BrandName>
    <span className="text-secondary my-4">
      Punta Nizuc - Cancún 335, Zona Hotelera, 77500 Cancún, Q.R. +998-825-32-28
    </span>
    <span className="mb-4">
      <TiSocialFacebook className="social facebook" />
      <TiSocialTwitter className="social twitter" />
      <TiSocialInstagram className="social instagram" />
    </span>
    <span className="text-secondary">Square 2021. All rights reserved</span>
  </StyledFooter>
);

export default Footer;
