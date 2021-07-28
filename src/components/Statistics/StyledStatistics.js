import styled from "styled-components";

export const StatisticContainer = styled.div`
  width: ${({ width }) => width || "1224px"};
  margin: ${({ margin }) => margin || "48px auto 0"};
  @media screen and (max-width: 1230px) {
    max-width: 1100px;
  }
`;

export const StatisticImgContainer = styled.div`
  height: ${({ height }) => height || "461px"};
  width: ${({ width }) => width || "1224px"};
  margin: ${({ margin }) => margin || "16px auto 0"};
  background-color: #c4c4c4;
  @media screen and (max-width: 1230px) {
    max-width: 1100px;
  }
`;
