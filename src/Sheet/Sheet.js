import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, switchAllIsActiveTodo } from ".././app/slices/todosSlice";
import {
  StyledPToggle,
  StyledDivNewTodo,
  StyledDiv,
  StyledDivShadow,
} from "./Sheet.styles.js";
import Note from "../Note/Note";
import Footer from "../Footer/Footer";

const Sheet = () => {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");
  const isGetFooter = todos && todos.length !== 0;
  
  const toAddNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const toSwitchIsActiveTodo = () => dispatch(switchAllIsActiveTodo());

  return (
    <>
      <StyledDivShadow>
        <StyledDiv>
          <StyledDivNewTodo>
            <form onSubmit={(e) => toAddNewTodo(e)}>
              <input
                value={newTodo}
                type="text"
                placeholder="What needs to be done?"
                onChange={(e) => setNewTodo(e.target.value)}
              ></input>
            </form>

            <StyledPToggle todos={todos} onClick={toSwitchIsActiveTodo}>
              ❯
            </StyledPToggle>
          </StyledDivNewTodo>
        </StyledDiv>
        <Note></Note>
        {isGetFooter && <Footer />}
      </StyledDivShadow>
    </>
  );
};

export default Sheet;
