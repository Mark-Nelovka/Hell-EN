import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    min-width: 320px;
  }

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1680px) {
    min-width: 1680px;
    padding-left: 183px;
    padding-right: 183px;
  }
`;
