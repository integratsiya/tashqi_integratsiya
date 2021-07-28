import React from "react";
import { GlobalTitle } from "../../globalStyle/title";
import { CardContainer, CardDate, CardImg } from "./StyledCards";
const Cards = (props) => {
  return (
    <div>
      <CardContainer>
        <CardImg></CardImg>
        <CardDate>
          <GlobalTitle fontSize="12px" color="#828282">
            {props.date}
          </GlobalTitle>
        </CardDate>
        <GlobalTitle fontSize="20px" fontWeight="600">
          {props.headerTitle}
        </GlobalTitle>
        <GlobalTitle fontSize="16px" color="#828282" margin="8px 0 0">
          {props.smallTitle}
        </GlobalTitle>
      </CardContainer>
    </div>
  );
};

export default Cards;
