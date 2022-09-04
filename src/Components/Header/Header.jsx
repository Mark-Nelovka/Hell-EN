import Media from "react-media";
import {
  HeaderSection,
  HeaderContainer,
  LogoContainer,
  LogoName,
  Logo,
  LogoTitle,
  ButtonConsultation,
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
            <LogoTitle>
              <span>Адский</span> английский
            </LogoTitle>
          </LogoContainer>

          <BurgerContainer>
            <Media queries={{ tablet: { minWidth: 768 } }}>
              {(matches) =>
                matches.tablet && (
                  <ButtonConsultation>
                    Консультация по телефону
                  </ButtonConsultation>
                )
              }
            </Media>
            <BurgerButton>
              <BurgerMenu />
            </BurgerButton>
          </BurgerContainer>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
}
