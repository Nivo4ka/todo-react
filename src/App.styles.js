import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background-color: #f5f5f5;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  div{
    box-sizing: border-box;
  }
}
`;

export const StyledDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDivContiner = styled.div`
  min-width: 230px;
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 100px;
    font-weight: 100;
    color: #af2f2f26;
  }
`;
