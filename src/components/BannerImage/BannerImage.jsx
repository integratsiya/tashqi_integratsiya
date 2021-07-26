import React from "react";
import { Link } from "react-router-dom";
import Button from "../globalStyle/buttons";
import { Flex } from "../globalStyle/GlobalContainer";
import { NavigationTitle } from "../Navigation/StyledNavigation";
import SelectInput from "../Select/select";
import { BannerContainer, BannerInput, BannerTitle, SelectContainer } from "./StyledBanner";

const BannerImage = () => {
  return (
    <div>
      <BannerContainer>
          <BannerTitle margin="0 0 24px 0">
            <NavigationTitle width="740px" fontSize="48px" color="#fff" fontWeight="600" lineHeight="54px">
              Ўзбекистон адвокатларининг ягона реестри
            </NavigationTitle>
          </BannerTitle>
        <SelectContainer>
          <Flex gap="16px" margin="0 0 16px 0">
            <BannerInput placeholder="Фамиля, исм, шариф"></BannerInput>
            <SelectInput
              one="Вилоятни танланг"
            />
            <SelectInput
              one="Туманни танланг"
            />
          </Flex>
          <Flex gap="16px">
            <SelectInput
              one="Адвокатлик тузилмаси"
            />
            <SelectInput
              one="Мақоми"
            />
            <BannerInput width="310px" placeholder="Сертификат рақами"></BannerInput>
          </Flex>
        </SelectContainer>
        <Flex gap="16px" margin="16px 0 0 0">
            <Link to="/hello">
              <Button padding="12px 63px" borderRadius="0" background="#FF4F12  ">
                <NavigationTitle fontSize="16px" color="#fff">
                  Излаш
                </NavigationTitle>
              </Button>
            </Link>
            <Link to="/hello">
              <Button padding="12px 63px" borderRadius="0" background="#fff  ">
                <NavigationTitle fontSize="16px" color="#000">
                  Излаш
                </NavigationTitle>
              </Button>
            </Link>

        </Flex>
      </BannerContainer>
    </div>
  );
};

export default BannerImage;
