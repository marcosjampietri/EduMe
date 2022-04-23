import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


html {
    
    background-color: hsla(240, 5%, 12%, 1);
}


* {
  color: hsla(240, 50%, 0%, 1);
  padding: 0;
  margin: 0;
  font-family: Arial;
  

  letter-spacing: 0.15em;
  line-height: 1;
  text-decoration: none;
  list-style: none;

  box-sizing: border-box;
  

}

`;

export const color = {
    dark: "hsla(240, 5%, 12%, 1)"
}