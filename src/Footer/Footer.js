import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, deleteTodos } from ".././app/slices/todosSlice";
import {
  selectTodoFilter,
  selectTodoList,
} from ".././app/selectors/rootSelector";
import {
  StyledDivFooter,
  StyledUlFooter,
  StyledButtonCompleted,
  StyledFilter,
} from "./Footer.styles.js";

const Footer = () => {
  const filter = useSelector(selectTodoFilter);
  const todos = useSelector(selectTodoList);
  const dispatch = useDispatch();

  return (
    <>
      <StyledDivFooter color="lime">
        <span>
          <strong>{todos.length} </strong>
          item left
        </span>
        <StyledUlFooter>
          {["All", "Active", "Completed"].map((elem, index) => (
            <li key={index}>
              <StyledFilter
                isSelected={filter === elem}
                onClick={() => dispatch(setFilter(elem))}
              >
                {elem}
              </StyledFilter>
            </li>
          ))}
        </StyledUlFooter>
        <StyledButtonCompleted
          hasCompleted={todos.find((item) => item.isActive === false)}
          onClick={() => {
            dispatch(deleteTodos());
          }}
        >
          Clear completed
        </StyledButtonCompleted>
      </StyledDivFooter>
    </>
  );
};

export default Footer;
