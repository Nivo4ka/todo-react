import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { StyledDiv, StyledDivContiner, GlobalStyle } from "./App.styles";
import Sheet from "./Sheet/Sheet";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />
        <StyledDiv>
          <StyledDivContiner>
            <h1>todos</h1>
            <Sheet></Sheet>
          </StyledDivContiner>
        </StyledDiv>
      </div>
    </ThemeProvider>
  );
};

export default App;
