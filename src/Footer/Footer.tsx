import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setFilter, deleteTodos } from "../app/slices/todosSlice";
import {
  StyledDivFooter,
  StyledUlFooter,
  StyledButtonCompleted,
  StyledFilter,
} from "./Footer.styles";

const Footer = () => {
  const filter = useSelector((state: RootState) => state.todos.filter);
  const todos = useSelector((state: RootState) => state.todos.todoList);
  const dispatch = useDispatch();

  const allFilters = ["All", "Active", "Completed"];
  const numberOfActiveTodos = todos.filter((todo) => todo.isActive).length;
  const isCompleted = (todos.findIndex((item) => !item.isActive)===-1);
  const toChangeFilter = (elem:string) => dispatch(setFilter(elem));
  const toDeleteTodos = () => dispatch(deleteTodos());

  return (
    <>
      <StyledDivFooter>
        <span>
          <strong>{numberOfActiveTodos} </strong>
          item left
        </span>
        <StyledUlFooter>
          {allFilters.map((elem:string, index:number) => (
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
