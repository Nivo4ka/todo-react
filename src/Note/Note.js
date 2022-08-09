import { useSelector, useDispatch } from "react-redux";
import { addTodo } from ".././app/slices/todosSlice";
import { selectTodoList } from ".././app/selectors/rootSelector";
import { StyledPanel, StyledNote } from "./Note.styles.js";

const Note = () => {
  const todos = useSelector(selectTodoList);
  const dispatch = useDispatch();

  return (
    <>
      <StyledPanel>
        {todos &&
          todos.length !== 0 &&
          todos.map((elem, index) => (
            <StyledNote key={index}>
              <p>{elem.title}</p>
            </StyledNote>
          ))}
      </StyledPanel>
    </>
  );
};

export default Note;
