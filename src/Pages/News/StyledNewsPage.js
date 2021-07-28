import styled, { css } from "styled-components";

export const MoreContainer = styled.div`
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin || ""};
  gap: ${({ gap }) => gap || ""};
  flex-wrap: wrap;
  display: flex;
`;
