// import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./app/slices/counterSlice";
import { addTodo } from "./app/slices/todosSlice";
// import { selectTodos } from "./app/selectors/rootSelector";
import { StyledDiv, StyledDivContiner, GlobalStyle } from "./App.styles.js";
import Sheet from "./Sheet/Sheet";
// import { Counter } from "./features/counter/Counter";

const App = () => {
  // const todos = useSelector(selectTodos);
  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
