import React from "react";
import { Link } from "react-router-dom";
import Button from "../globalStyle/buttons";
import { Flex } from "../globalStyle/GlobalContainer";
import { NavigationTitle } from "../Navigation/StyledNavigation";
import SelectInput from "../Select/select";
import { BannerContainer, BannerTitle, SelectContainer } from "./StyledBanner";

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
          <Flex>
            <SelectInput
              one="hello1"
              two="hello2"
              three="hello3"
              four="hello4"
              five="hello5"
            />
            <SelectInput
              one="world1"
              two="world2"
              three="world3"
              four="world4"
              five="world5"
            />
            <SelectInput
              one="www1"
              two="www2"
              three="www3"
              four="www4"
              five="www5"
            />
            <SelectInput
              one="Advakat1"
              two="Advakat2"
              three="Advakat3"
              four="Advakat4"
              five="Advakat5"
            />
            <Link to="/hello">
              <Button padding="12px 63px" borderRadius="0" background="#2F80ED">
                <NavigationTitle fontSize="16px" color="#fff">
                  Излаш
                </NavigationTitle>
              </Button>
            </Link>
          </Flex>
        </SelectContainer>
      </BannerContainer>
    </div>
  );
};

export default BannerImage;
