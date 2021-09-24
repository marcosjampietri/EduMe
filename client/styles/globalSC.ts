import { createGlobalStyle, css } from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { Transition, animated, config, useSpring } from "react-spring";

export const GlobalStyle = createGlobalStyle`



body {
  color: hsla(240, 50%, 100%, 1);
  padding: 0;
  margin: 0;
  font-family: Montserrat;
  font-weight: lighter;

  letter-spacing: 0.05em;
  line-height: 1;
  text-decoration: none;
  list-style: none;

  box-sizing: border-box;
  

}

`;
