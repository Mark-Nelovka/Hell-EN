import styled from "styled-components";

import HeroImage from "../../assets/images/Hero-min.png";
import Line from "../../assets/images/Line-mobile-min.png";

export const HeroSection = styled.div``;

export const HeroContainer = styled.div`
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-family: var(--baseFont);
  font-weight: var(--extraBold);
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: var(--black);
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const SubTitle = styled.div`
  font-family: var(--baseFont);
  font-weight: var(--medium);
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.08em;
  margin-bottom: 30px;
  & > span:first-child {
    color: var(--gray);
  }
  & > p {
    color: var(--black);
  }
  & > span:last-child {
    color: var(--active-color);
  }
`;

export const ButtonForLesson = styled.button`
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--white);
  border: none;
  background-color: var(--active-color);
  padding: 14px 15px;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const HeroImageContainer = styled.div`
  width: 208px;
  margin: 0 auto;
`;

export const HeroImg = styled.img.attrs({
  src: HeroImage,
})``;

export const HeroLine = styled.img.attrs({
  src: Line,
})`
  margin: 0 auto;
`;
