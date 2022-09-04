import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/images/Fire-logo.svg";
import { ReactComponent as Burger } from "../../assets/images/Burger-menu.svg";

export const HeaderSection = styled.header`
  padding-top: 30px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  font-family: "Montserrat";
  font-weight: 800;
`;

export const LogoName = styled.div`
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #111518;
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;
export const Logo = styled(LogoImg)`
  width: 14px;
  height: 19px;
  margin-right: 0.5px;
  margin-left: 0.5px;
`;
export const LogoTitle = styled.h1`
  letter-spacing: 0.5px;
  font-size: 5px;
  color: #111518;
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
