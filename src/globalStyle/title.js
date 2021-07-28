import styled from "styled-components";

export const GlobalTitle = styled.div`
  font-size: ${({ fontSize }) => fontSize || "14px"};
  width: ${({ width }) => width || ""};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  color: ${({ color }) => color || "#000"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  line-height: ${({ lineHeight }) => lineHeight || "24px"};
  margin: ${({ margin }) => margin || ""};
`;
