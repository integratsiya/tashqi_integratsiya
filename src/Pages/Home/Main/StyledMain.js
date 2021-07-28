import styled from "styled-components";

export const MainContainerTop = styled.div`
  max-width: 1224px;
  display: flex;
  margin: 48px auto 0;
  justify-content: space-between;

  @media screen and (max-width: 1230px) {
    max-width: 1100px;
  }
`;

export const StatisticContainer = styled.div`
  max-width: 1224px;
  display: flex;
  margin: 48px auto 0;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 1230px) {
    max-width: 1100px;
    margin: 0 auto;
  }
`;
