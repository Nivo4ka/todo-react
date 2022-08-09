import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from ".././app/slices/todosSlice";
import { selectTodoList } from ".././app/selectors/rootSelector";
import {
  StyledPToggle,
  StyledDivNewTodo,
  StyledDiv,
  StyledDivShadow,
} from "./Sheet.styles.js";
import Note from "../Note/Note";
import Footer from "../Footer/Footer";

const Sheet = () => {
  const todos = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  const toAddNewTodo = () => {
    if (newTodo !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <>
      <StyledDivShadow>
        <StyledDiv>
          <StyledDivNewTodo>
            <input
              value={newTodo}
              type="text"
              placeholder="What needs to be done?"
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  toAddNewTodo();
                }
              }}
            ></input>
            {todos && todos.length !== 0 && <StyledPToggle>❯</StyledPToggle>}
          </StyledDivNewTodo>
        </StyledDiv>
        <Note></Note>
        {todos && todos.length !== 0 && <Footer />}
      </StyledDivShadow>
    </>
  );
};

export default Sheet;