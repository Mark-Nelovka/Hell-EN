import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1680px) {
    width: 1680px;
    padding-left: 183px;
    padding-right: 183px;
  }
`;
