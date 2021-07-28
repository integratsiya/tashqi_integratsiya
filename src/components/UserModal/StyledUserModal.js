import styled, { css } from "styled-components";

export const UserModalHeader = styled.div`
  max-width: 1920px;
`;

export const UserModalContainer = styled.div`
  max-width: 744px;
  min-height: 576px;
  margin: 0 auto;
  padding: 48px;
  background-color: #fff;
`;

export const ModalUserNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 546px;
  min-height: 120px;
  gap: 24px;
  margin-bottom: 24px;
`;

export const ModalUserImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: gray;
`;

export const ModalUserNameCont = styled.div`
  width: 402px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`;
export const ModalFlexBox = styled.div`
  display: flex;
  gap: 24px;
`;
export const ModalUserLicense = styled.div`
  background-color: rgba(170, 4, 4, 0.1);
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  width: 342px;
  line-height: 24px;
  color: #a90000;
  padding: 0 8px;
  margin-top: 8px;
`;

export const ModalFlexBoxInsideBox = styled.div`
  width: 200px;
`;

export const ModalFlexBoxInsideTitle = styled.div`
  color: ${({ color }) => color || "#000"};
  margin: ${({ margin }) => margin || ""};
  font-size: ${({ fontSize }) => fontSize || "12px"};
  line-height: ${({ lineHeight }) => lineHeight || "16px"};
  font-weight: bold;
`;
