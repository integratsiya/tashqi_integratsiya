import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../../components/Cards/Cards";
import { GlobalTitle } from "../../../globalStyle/title";
import Statistics from "../../../components/Statistics/Statistics";
import { MainContainerTop, StatisticContainer } from "./StyledMain";
import Sponsors from "../../../components/Sponsors/Sponsors";

const Main = () => {
  const data = [
    {
      date: "2 ИЮНЬ 2021",
      headerTitle: "Палата фаолиятининг долзарб масалалари",
      smallTitle:
        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди",
    },
    {
      date: "2 ИЮНЬ 2021",
      headerTitle: "Палата фаолиятининг долзарб масалалари",
      smallTitle:
        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди",
    },
    {
      date: "2 ИЮНЬ 2021",
      headerTitle: "Палата фаолиятининг долзарб масалалари",
      smallTitle:
        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди",
    },
  ];
  return (
    <div>
      <MainContainerTop>
        <GlobalTitle fontSize="32px" fontWeight="600">
          Янгиликлар
        </GlobalTitle>
        <GlobalTitle color="#2A2EF4" fontSize="16px" fontWeight="600">
          <Link to="/MoreNews">Barchasini ko‘rish</Link>
        </GlobalTitle>
      </MainContainerTop>
      <StatisticContainer margin="24px auto 0" gap="24px" width="1224px">
        {data.map((el) => (
          <Cards
            date={el.date}
            headerTitle={el.headerTitle}
            smallTitle={el.smallTitle}
          />
        ))}
      </StatisticContainer>
      <Statistics />
      <Sponsors />
    </div>
  );
};

export default Main;
