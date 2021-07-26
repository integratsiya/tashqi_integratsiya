import React from "react";
import { Flex } from "../globalStyle/GlobalContainer";
import Language from "../SelectLanguage/Language";
import {
  GrayBackground,
  NavigationContainer,
  NavigationTitle,
} from "./StyledNavigation";

const Navigation = () => {
  return (
    <div>
      <NavigationContainer>
        <Flex justify="space-between" height="100%">
          <Flex gap="24px">
            <GrayBackground
              width="184px"
              height="40px"
              borderRadius="4px"
            ></GrayBackground>
            <NavigationTitle>Статистика</NavigationTitle>
            <NavigationTitle>Янгиликлар</NavigationTitle>
            <NavigationTitle>Ҳаволалар</NavigationTitle>
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
