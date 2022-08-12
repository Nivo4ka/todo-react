import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "./../app/hooks";
import { addTodo, switchAllIsActiveTodo } from "../app/slices/todosSlice";
import {
  StyledPToggle,
  StyledDivNewTodo,
  StyledDiv,
  StyledDivShadow,
} from "./Sheet.styles";
import Note from "../Note/Note";
import Footer from "../Footer/Footer";

const Sheet = () => {
  const todos = useAppSelector((state) => state.todos.todoList);
  const dispatch = useAppDispatch();

  const [newTodo, setNewTodo] = useState("");
  const isGetTodos = todos && todos.length !== 0;
  const numberOfActiveTodos =
    todos.filter((todo) => todo.isActive).length !== 0;

  const toChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);
  const toAddNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const toSwitchIsActiveTodo = () => dispatch(switchAllIsActiveTodo());

  return (
    <StyledDivShadow>
      <StyledDiv>
        <StyledDivNewTodo>
          <form onSubmit={toAddNewTodo}>
            <input
              value={newTodo}
              type="text"
              placeholder="What needs to be done?"
              onChange={toChangeNewTodo}
            />
          </form>

          <StyledPToggle
            isGetTodos={isGetTodos}
            numberOfActiveTodos={numberOfActiveTodos}
            onClick={toSwitchIsActiveTodo}
          >
            ❯
          </StyledPToggle>
        </StyledDivNewTodo>
      </StyledDiv>
      <Note />
      {isGetTodos && <Footer />}
    </StyledDivShadow>
  );
};

export default Sheet;
