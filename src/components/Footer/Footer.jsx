import React from "react";
import {
  FooterBottom,
  FooterContainer,
  FooterFlex,
  FooterMain,
  FooterTitle,
} from "./StyledFooter";
import FaceBook from "../../photo/facebook-circle.svg";
import YouTube from "../../photo/youtube-circle.svg";
import Instagram from "../../photo/instagram-circle.svg";
import Twitter from "../../photo/twitter-circle.svg";
import { Flex } from "../../globalStyle/Flex";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterMain height="100px">
          <FooterFlex>
            <FooterTitle fontSize="24px" width="288px" fontWeight="normal">
              12 Neglinnaya Street, Moscow, 107016 Russia
            </FooterTitle>
            <div>
              <Flex gap="24px">
                <FooterTitle fontSize="16px" fontWeight="normal">
                  Статистика
                </FooterTitle>
                <FooterTitle fontSize="16px" fontWeight="normal">
                  Янгиликлар
                </FooterTitle>
                <FooterTitle fontSize="16px" fontWeight="normal">
                  Ҳаволалар
                </FooterTitle>
              </Flex>
            </div>
          </FooterFlex>
          <FooterFlex margin="16px 0 0 0">
            <div>
              <FooterTitle>8 800 300-30-00</FooterTitle>
              <FooterTitle>+7 499 300-30-00</FooterTitle>
            </div>
            <Flex gap="8px">
              <img src={FaceBook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
              <img src={YouTube} alt="YouTube" />
              <img src={Twitter} alt="Twitter" />
            </Flex>
          </FooterFlex>
        </FooterMain>
      </FooterContainer>
      <FooterBottom>
        <FooterMain>
          <FooterTitle>
            © 2021 O'zbekiston Respublikasi Adliya vazirligi
          </FooterTitle>
        </FooterMain>
      </FooterBottom>
    </div>
  );
};

export default Footer;
