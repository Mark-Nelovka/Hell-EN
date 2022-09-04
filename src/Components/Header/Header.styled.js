import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/images/Fire-logo.svg";
import { ReactComponent as Burger } from "../../assets/images/Burger-menu.svg";

export const HeaderSection = styled.header`
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    padding-top: 41px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* @media screen and (min-width: 1680px) {
    justify-content: flex-start;
  } */
`;

export const LogoContainer = styled.div`
  font-family: var(--baseFont);
  font-weight: var(--extraBold);
`;

export const LogoName = styled.div`
  font-size: 13px;
  letter-spacing: 1px;
  color: var(--black);
  display: flex;
  align-items: center;
  margin-bottom: 1px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.04em;
    margin-bottom: 3px;
  }
`;
export const Logo = styled(LogoImg)`
  width: 14px;
  height: 19px;
  margin-right: 3px;
  margin-left: 3px;
  @media screen and (min-width: 768px) {
    width: 22px;
    height: 30px;
  }
`;
export const LogoTitle = styled.h1`
  font-weight: var(--bold);
  letter-spacing: 0.5px;
  font-size: 5px;
  text-transform: uppercase;
  color: var(--black);
  @media screen and (min-width: 768px) {
    font-size: 8px;
    line-height: 10px;
    letter-spacing: 0.18em;
    & > span {
      color: var(--active-color);
    }
  }
`;

export const BurgerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerButton = styled.button`
  background-color: inherit;
  cursor: pointer;
  border: none;
`;

export const BurgerMenu = styled(Burger)`
  width: 21px;
  height: 12px;
`;

export const ButtonConsultation = styled.button`
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: inherit;
  color: var(--active-color);
  padding: 16px 20px;
  border: 2px solid var(--active-color);
  cursor: pointer;
  margin-right: 40px;
  @media screen and (min-width: 1680px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.14em;
    margin-right: 0;
  }
`;

export const MenuContainer = styled.div``;
export const MenuNavigate = styled.nav``;
export const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;
export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
export const MenuLink = styled.a.attrs((props) => ({
  href: props.id,
}))`
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: var(--gray);
  &:hover {
    color: var(--active-color);
  }
`;
