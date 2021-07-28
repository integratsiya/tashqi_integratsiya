import React from "react";
import { Flex } from "../../globalStyle/Flex";
import Language from "../SelectLanguage/Language";
import {
  GrayBackground,
  NavigationContainer,
  NavigationTitle,
  NavLinkStyle,
} from "./StyledNavigation";

const Navigation = () => {
  return (
    <div>
      <NavigationContainer>
        <Flex justify="space-between" height="100%">
          <Flex gap="24px">
            <NavLinkStyle to="/">LOGO</NavLinkStyle>
            <NavLinkStyle to="#">Статистика</NavLinkStyle>
            <NavLinkStyle to="/news">Янгиликлар</NavLinkStyle>
            <NavLinkStyle to="#">Ҳаволалар</NavLinkStyle>
          </Flex>
          {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */}
          <Flex>
            <Language />
            <Flex gap="8px">
              <GrayBackground
                width="40px"
                height="40px"
                borderRadius="50%"
              ></GrayBackground>
              <NavigationTitle>Личный кабинет</NavigationTitle>
            </Flex>
          </Flex>
        </Flex>
      </NavigationContainer>
    </div>
  );
};

export default Navigation;
