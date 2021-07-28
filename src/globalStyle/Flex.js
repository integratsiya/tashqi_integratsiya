import styled from "styled-components";

const StyledFlex = styled.div`
  height: ${({ height }) => height || ""};
  width: ${({ width }) => width || ""};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "stretch"};
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  margin: ${({ margin }) => margin || "0"};
  gap: ${({ gap }) => gap || "0"};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};
