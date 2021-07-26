import styled from "styled-components";

export const SecondCardContainer = styled.div`
  width: ${({ width }) => width || "288px"};
  height: ${({ height }) => height || "384px"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  padding: ${({ padding }) => padding || "24px"};
  border: 1px solid ${({ borderColor }) => borderColor || "#E0E0E0"};
`;

export const SecondWrapContainer = styled.div`
  max-width: ${({ width }) => width || "1224px"};
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  gap: 24px;
`;

export const LicenseContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || "rgba(170, 4, 4, 0.1)"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  margin: ${({ margin }) => margin || "8px 0 0 0"};
  padding: ${({ padding }) => padding || "4px 8px"};
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #a90000;
  width: 181px;
  height: 56px;
`;
