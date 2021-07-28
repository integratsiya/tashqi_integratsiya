import React from "react";
import { GlobalTitle } from "../../globalStyle/title";
import { Container } from "../../globalStyle/Wrapper";
import { StatisticContainer } from "../../Pages/Home/Main/StyledMain";
import { StatisticImgContainer } from "./StyledStatistics";

const Statistics = () => {
  return (
    <Container>
      <GlobalTitle fontSize="32px" fontWeight="600">
        Статистика
      </GlobalTitle>
      <StatisticContainer>
        <StatisticImgContainer></StatisticImgContainer>
      </StatisticContainer>
    </Container>
  );
};

export default Statistics;
