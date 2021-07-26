import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  min-height: ${({ minHeight }) => minHeight || "260px"};
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "64px 108px"};
  background-color: #272e3d;
`;

export const FooterBottom = styled.div`
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "32px 108px"};
  background-color: #272e3d;
  border-top: 1px solid #F3F3F4;
`;

export const FooterMain = styled.div`
  height: ${({ height }) => height || ""};
  margin: 0 auto;
  width: 1224px;
`;

export const FooterFlex = styled.div`
  display: flex;
  width: 1224px;
  margin: ${({ margin }) => margin || ""};
  justify-content: space-between;
`;

export const FooterTitle = styled.div`
  width: ${({ width }) => width || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  color: ${({ color }) => color || "#fff"};
  margin: ${({ margin }) => margin || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
`;
