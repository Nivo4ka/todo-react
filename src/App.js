import { StyledDiv, StyledDivContiner, GlobalStyle } from "./App.styles.js";
import Sheet from "./Sheet/Sheet";

const App = () => {

  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <StyledDivContiner>
          <h1>todos</h1>
          <Sheet></Sheet>
        </StyledDivContiner>
      </StyledDiv>
    </>
  );
};

export default App;
