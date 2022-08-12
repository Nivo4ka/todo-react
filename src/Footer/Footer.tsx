import React from "react";
import { useAppSelector, useAppDispatch } from "./../app/hooks";
import { setFilter, deleteTodos } from "../app/slices/todosSlice";
import {
  StyledDivFooter,
  StyledUlFooter,
  StyledButtonCompleted,
  StyledFilter,
} from "./Footer.styles";

const Footer = () => {
  const todos = useAppSelector((state) => state.todos.todoList);
  const filter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const allFilters = ["All", "Active", "Completed"];
  const numberOfActiveTodos = todos.filter((todo) => todo.isActive).length;
  const isCompleted = todos.findIndex((item) => !item.isActive) === -1;
  const toChangeFilter = (elem: string) => dispatch(setFilter(elem));
  const toDeleteTodos = () => dispatch(deleteTodos());

  return (
    <>
      <StyledDivFooter>
        <span>
          <strong>{numberOfActiveTodos} </strong>
          item left
        </span>
        <StyledUlFooter>
          {allFilters.map((elem, index) => (
            <li key={index}>
              <StyledFilter
                isSelected={filter === elem}
                onClick={() => toChangeFilter(elem)}
              >
                {elem}
              </StyledFilter>
            </li>
          ))}
        </StyledUlFooter>
        <StyledButtonCompleted
          hasCompleted={isCompleted}
          onClick={toDeleteTodos}
        >
          Clear completed
        </StyledButtonCompleted>
      </StyledDivFooter>
    </>
  );
};

export default Footer;
