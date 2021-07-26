import React from "react";
import { GlobalTitle } from "../../globalStyle/title";
import { StatisticContainer } from "../Statistics/StyledStatistics";
import SecondMainCard from "./SecondMainCard/SecondMainCard";
import { SecondWrapContainer } from "./SecondMainCard/StyledSecondMainCard";

const SearchResults = () => {

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
]
  return (
    <div>
      <StatisticContainer>
        <GlobalTitle fontSize="32px" fontWeight="600" margin="0 0 29px 0">
          Қидирув натижалари
        </GlobalTitle>
        <SecondWrapContainer>
          {data.map(el => <SecondMainCard 
            name={el.name}
            region={el.region}
            district={el.district}
            companyName={el.companyName}
            userID={el.userID}
          />)}
          
        </SecondWrapContainer>
      </StatisticContainer>
    </div>
  );
};

export default SearchResults;
