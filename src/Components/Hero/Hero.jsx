import {
  HeroSection,
  HeroContainer,
  Title,
  SubTitle,
  ButtonForLesson,
  HeroImageContainer,
  HeroImg,
  HeroLine,
} from "./Hero.styled";

import { Container } from "../../stylesheet/Container.styled";
export function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroContainer>
          <Title>Комплексная подготовка к ВНО по английскому языку</Title>
          <SubTitle>
            <span>Просто не будет</span>
            <p>Но ты гарантировано наберешь</p>
            <span>+25 баллов</span>
          </SubTitle>
          <ButtonForLesson>хочу на бесплатное занятие</ButtonForLesson>
        </HeroContainer>
        <HeroImageContainer>
          <HeroImg />
        </HeroImageContainer>
      </Container>
      <HeroLine />
    </HeroSection>
  );
}
