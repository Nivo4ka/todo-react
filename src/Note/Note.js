import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  switchIsActiveTodo,
  deleteTodo,
  changeTodo,
} from ".././app/slices/todosSlice";
import {
  selectTodoList,
  selectTodoFilter,
} from ".././app/selectors/rootSelector";
import {
  StyledPanel,
  StyledNote,
  StyledLabelNote,
  StyledLabelCheck,
  StyledCheckbox,
  StyledButtonDestroy,
  StyledInputNote,
  StyledTitleTodo,
} from "./Note.styles.js";

const Note = () => {
  const todos = useSelector(selectTodoList);
  const filter = useSelector(selectTodoFilter);
  const dispatch = useDispatch();
  const [changeTodoNote, setChangeTodoNote] = useState({
    title: "",
    index: -1,
  });

  const toChangeTodo = () => {
    if (
      changeTodoNote.title !== "" &&
      changeTodoNote.title.split("").findIndex((item) => item !== " ") !== -1
    ) {
      const { title, index } = changeTodoNote;
      dispatch(changeTodo({ index, title }));
      setChangeTodoNote({
        title: "",
        index: -1,
      });
    }
  };

  return (
    <>
      <StyledPanel>
        {todos &&
          todos.length !== 0 &&
          todos.map(
            (elem, index) =>
              ((filter === "Active" && elem.isActive === true) ||
                (filter === "Completed" && elem.isActive === false) ||
                filter === "All") && (
                <StyledNote
                  key={index}
                  onDoubleClick={() => {
                    setChangeTodoNote({ title: elem.title, index: index });
                  }}
                >
                  {changeTodoNote.index === index ? (
                    <StyledInputNote
                      value={changeTodoNote.title}
                      onChange={(e) =>
                        setChangeTodoNote({
                          ...changeTodoNote,
                          title: e.target.value,
                        })
                      }
                      autoFocus
                      onBlur={() => toChangeTodo()}
                    />
                  ) : (
                    <StyledTitleTodo>
                      <StyledCheckbox
                        checked={!elem.isActive}
                        onChange={() => dispatch(switchIsActiveTodo(index))}
                      />
                      <StyledLabelCheck
                        checked={!elem.isActive}
                      ></StyledLabelCheck>
                      <StyledLabelNote checked={!elem.isActive}>
                        {elem.title}
                      </StyledLabelNote>
                      <StyledButtonDestroy
                        onClick={() => dispatch(deleteTodo(index))}
                      >
                        ×
                      </StyledButtonDestroy>
                    </StyledTitleTodo>
                  )}
                </StyledNote>
              )
          )}
      </StyledPanel>
    </>
  );
};

export default Note;
