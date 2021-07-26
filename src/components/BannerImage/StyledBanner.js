import styled from "styled-components";
import BannerImage from "../Photo/BannerImage.png";

export const BannerContainer = styled.div`
  width: 100%;
  background-image: url(${BannerImage});
  /* display: flex; */
  /* align-items: flex-end; */
  padding: 94px 344px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerInside = styled.div`
  width: 1224px;
  margin: 0 auto 64px;
`;

export const BannerTitle = styled.div`
  margin: ${({ margin }) => margin || "0"};
`;

export const SelectContainer = styled.div`
  max-width: ${({ width }) => width || "1224px"};
  background-color: #fff;
  /* margin: 94px auto 64px; */
  border-radius: 4px;
  padding: 24px;
  @media screen and (max-width: 1230px) {
    width: 1100px;
  }
`;

export const BannerInput = styled.input`
  width: ${({ width }) => width || "524px"};
  background-color: #f3f3f4;
  border: none;
  padding: 12px 14px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #92959C;
  &:focus{
    outline: none;
  }
  &::placeholder {
       color: #92959C;
   }
`;
