import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: ${({ color }) => color || "#fff"};
  border: none;
  cursor: pointer;
  font-size: 15px;
  border-radius: ${(props) => props.borderRadius || "4px"};
  padding: ${(props) => props.padding || "12px 54px"};
  margin: ${(props) => props.margin || ""};
  background-color: ${(props) => props.background || "#11151E"};
  border: 1px solid  ${(props) => props.borderColor || "transperent"};
  transition: all 0.2s;
  /* &:hover {
    opacity: 0.9;
  } */
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
