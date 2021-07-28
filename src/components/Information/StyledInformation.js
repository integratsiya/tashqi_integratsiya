import styled, { css } from "styled-components";

export const HeaderInformation = styled.div`
  max-width: 1920px;
`;

export const InformationContainer = styled.div`
  max-width: 1224px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const InformationTitle = styled.div`
  font-size: ${({ fontSize }) => fontSize || "24px"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  color: ${({ color }) => color || "#000"};
  margin: ${({ margin }) => margin || ""};
`;

export const InfoTitle = styled.div`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color }) => color || "#4F4F4"};
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || ""};
  line-height: ${({ lineHeight }) => lineHeight || "32px"};
`;

export const InfoBigImage = styled.div`
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || "808px"};
  height: ${({ height }) => height || "496px"};
  border-radius: 8px;
  background-color: #c4c4c4;
`;

export const OtherInformationTitle = styled.div`
  margin: ${({ margin }) => margin || ""};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  line-height: ${({ lineHeight }) => lineHeight || "24px"};
  color: ${({ color }) => color || "#000"};
`;

export const OtherInformationTitleBox = styled.div`
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || "288px"};
  min-height: 104px;
  border-top: 1px solid #F3F3F4;
  border-bottom: 1px solid #F3F3F4;
  padding: 16px 0;
`;
