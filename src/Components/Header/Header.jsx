import {
  HeaderSection,
  HeaderContainer,
  LogoContainer,
  LogoName,
  Logo,
  LogoTitle,
  BurgerButton,
  BurgerContainer,
  BurgerMenu,
} from "./Header.styled";
import { Container } from "../../stylesheet/Container.styled";
export function Header() {
  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <LogoContainer>
            <LogoName>
              Hell
              <Logo />
              EN
            </LogoName>
            <LogoTitle>Адский английский</LogoTitle>
          </LogoContainer>
          <BurgerContainer>
            <BurgerButton>
              <BurgerMenu />
            </BurgerButton>
          </BurgerContainer>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
}
