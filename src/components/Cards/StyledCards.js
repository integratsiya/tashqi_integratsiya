import styled from "styled-components";

export const CardContainer = styled.div`
  width: 392px;
`;

export const CardImg = styled.div`
  width: ${({ width }) => width || "392px"};
  height: ${({ height }) => height || "240px"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  background-color: #c4c4c4;
  @media screen and (max-width: 1230px){
    margin-top: 30px;
  }
`;

export const CardDate = styled.div`
  margin: ${({ margin }) => margin || "16px 0 8px"};
`;
