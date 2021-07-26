import styled from "styled-components";

export const NavigationContainer = styled.div`
  padding: ${({ padding }) => padding || "24px 112px 24px 104px"};
  height: 72px;
  background-color: #fff;
  width: 1440px;
  margin: 0 auto;
`;

export const GrayBackground = styled.div`
  height: ${({ height }) => height || "0"};
  width: ${({ width }) => width || "0"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  background-color: #c4c4c4;
`;

export const NavigationTitle = styled.div`
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  color: ${({ color }) => color || "#000"};
  width: ${({ width }) => width || ""};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  line-height: ${({ lineHeight }) => lineHeight || "24px"};
`;
