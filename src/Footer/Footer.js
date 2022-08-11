import { useSelector, useDispatch } from "react-redux";
import { setFilter, deleteTodos } from ".././app/slices/todosSlice";
import {
  StyledDivFooter,
  StyledUlFooter,
  StyledButtonCompleted,
  StyledFilter,
} from "./Footer.styles.js";

const Footer = () => {
  const filter = useSelector((state) => state.todos.filter);
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const allFilters = ["All", "Active", "Completed"];
  const numberOfActiveTodos = todos.filter((todo) => todo.isActive).length;
  const isCompleted = !!todos.find((item) => item.isActive); //cnhfyyjt
  const toChangeFilter = (elem) => dispatch(setFilter(elem));
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
