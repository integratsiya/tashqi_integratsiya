import React from "react";
import BannerImage from "../../components/BannerImage/BannerImage";
import CardItem from "../../components/CardItem/CardItem";
import { GlobalTitle } from "../../globalStyle/title";
import { StatisticContainer } from "../Home/Main/StyledMain";
import { SecondWrapContainer } from "./StyledLawyersPage";

const data = [
  {
    name: "Муҳаммадқодиров Алишер Куралович",
    region: "Фарғона вилояти",
    district: "Боёвут тумани",
    companyName: "«АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
    userID: "000057",
  },
  {
    name: "Муҳаммадқодиров Алишер Куралович",
    region: "Фарғона вилояти",
    district: "Боёвут тумани",
    companyName: "«АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
    userID: "000057",
  },
  {
    name: "Муҳаммадқодиров Алишер Куралович",
    region: "Фарғона вилояти",
    district: "Боёвут тумани",
    companyName: "«АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
    userID: "000057",
  },
  {
    name: "Муҳаммадқодиров Алишер Куралович",
    region: "Фарғона вилояти",
    district: "Боёвут тумани",
    companyName: "«АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
    userID: "000057",
  },
];
const LawyersPage = () => {
  return (
    <div>
      <BannerImage />
      <StatisticContainer>
        <GlobalTitle fontSize="32px" fontWeight="600" margin="0 0 29px 0">
          Қидирув натижалари
        </GlobalTitle>
        <SecondWrapContainer>
          {data.map((el) => (
            <CardItem
              name={el.name}
              region={el.region}
              district={el.district}
              companyName={el.companyName}
              userID={el.userID}
            />
          ))}
        </SecondWrapContainer>
      </StatisticContainer>
    </div>
  );
};

export default LawyersPage;
