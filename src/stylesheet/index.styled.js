import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    text-align: center;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  button {
    padding: 0;
    cursor: pointer;
  }
  table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

  :root {
    --black: #000000;
    --gray: #bdbdbd;
    --light-gray: #E0E0E0;
    --dark-grey: #A6A6A6;
    --backdrop: rgba(0, 0, 0, 0.25);
    --diagram-shadow: rgba(255, 255, 255, 0.20);
    --background-light-grey:rgba(255, 255, 255, 0.4);
    --background-light-grey: #e7eaf2;
    --background-gray: #E5E5E5;
    --white: #ffffff;
    --green: #24CCA7;
    --active-blue: #4A56E2;
    --blue:#6E78E8;
    --pink: #FF6596;
    --vector-color:#E7E5F2;
    --add-transaction-menu-color:rgba(255, 255, 255, 0.7);
    --error-message: #d50c0c;

    --transaction-underline-color: #dcdcdf;
     --transaction-item-bg-color: #ffffff;

    /* --baseFont: 'Circe', sans-serif;
    --secondaryFont: 'Poppins', sans-serif; */

    --regular: 400;
    --bold: 700;

  }

/* input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */
`;