import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

body {
  background-color: ${({ theme }) => theme.palette.lightTheme.backdround};
  font-size: ${({ theme }) => theme.palette.font.sizeFooter};
  font-family: ${({ theme }) => theme.palette.font.family};
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
    font-size: ${({ theme }) => theme.palette.font.sizeTitle};
    font-weight: ${({ theme }) => theme.palette.font.weight};
    color: ${({ theme }) => theme.palette.lightTheme.titleText};
  }
`;
