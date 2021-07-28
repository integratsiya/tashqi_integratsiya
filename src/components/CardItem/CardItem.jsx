import { Button } from "@material-ui/core";
import React from "react";
import { Flex } from "../../globalStyle/Flex";
import { GlobalTitle } from "../../globalStyle/title";
import {
  LicenseContainer,
  SecondCardContainer,
} from "../../Pages/Lawyers/StyledLawyersPage";

import { GrayBackground } from "../Navigation/StyledNavigation";
// import Button from "../../globalStyle/buttons";
// import { Flex } from "../globalStyle/Flex";
// import { GlobalTitle } from "../globalStyle/title";
// import { GrayBackground } from "../Navigation/StyledNavigation";

// import { LicenseContainer, SecondCardContainer } from "./StyledCardItem";

const CardItem = (props) => {
  return (
    <div>
      <SecondCardContainer>
        <Flex align="stretch" gap="20px">
          <GlobalTitle width="148px" fontSize="16px" fontWeight="600">
            {props.name}
          </GlobalTitle>
          <GrayBackground
            width="72px"
            height="72px"
            borderRadius="50%"
          ></GrayBackground>
        </Flex>
        <div>
          <GlobalTitle color="#828282" margin="14px 0 0">
            {props.region}, <br /> {props.district}
          </GlobalTitle>
          <GlobalTitle color="#828282">{props.companyName}</GlobalTitle>
          <GlobalTitle fontWeight="600">№ СИ {props.userID}</GlobalTitle>
        </div>
        <LicenseContainer>{props.licenseTitle}</LicenseContainer>
        <Button
          background="#fff"
          borderColor="#828282"
          color="#828282"
          margin="24px 0 0"
        >
          Тўлиқ маълумот
        </Button>
      </SecondCardContainer>
    </div>
  );
};

export default CardItem;
