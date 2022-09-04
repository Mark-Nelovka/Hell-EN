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
  MenuContainer,
  MenuNavigate,
  MenuList,
  MenuItem,
  MenuLink,
} from "./Header.styled";
import { Container } from "../../stylesheet/Container.styled";
export function Header() {
  // const scrollToSection = (e) => {
  //   console.log(e.target.id);
  // };

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
          <Media queries={{ desktop: { minWidth: 1680 } }}>
            {(matches) =>
              matches.desktop && (
                <MenuContainer>
                  <MenuNavigate>
                    <MenuList>
                      <MenuItem>
                        <MenuLink id="Program">Программы обучения</MenuLink>
                      </MenuItem>
                      <MenuItem>
                        <MenuLink id="AboutUs">О нас</MenuLink>
                      </MenuItem>
                      <MenuItem>
                        <MenuLink id="Methods">Варианты обучения</MenuLink>
                      </MenuItem>
                      <MenuItem>
                        <MenuLink id="Contacts">Контакты</MenuLink>
                      </MenuItem>
                    </MenuList>
                  </MenuNavigate>
                </MenuContainer>
              )
            }
          </Media>
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
            <Media queries={{ desktop: { maxWidth: 1679 } }}>
              {(matches) =>
                matches.desktop && (
                  <BurgerButton>
                    <BurgerMenu />
                  </BurgerButton>
                )
              }
            </Media>
          </BurgerContainer>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
}
