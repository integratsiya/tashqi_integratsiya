import React from "react";
import { GlobalTitle } from "../../globalStyle/title";
import { StatisticContainer, StatisticImgContainer } from "./StyledStatistics";

const Statistics = () => {
  return (
    <div>
      <StatisticContainer>
        <GlobalTitle fontSize="32px" fontWeight="600">Статистика</GlobalTitle>
        <StatisticImgContainer></StatisticImgContainer>
      </StatisticContainer>
    </div>
  );
};

export default Statistics;
