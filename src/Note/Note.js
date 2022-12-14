import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  switchIsActiveTodo,
  deleteTodo,
  changeTodo,
} from ".././app/slices/todosSlice";
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
  const todos = useSelector((state) => state.todos.todoList);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();
  const [changeTodoNote, setChangeTodoNote] = useState({
    title: "",
    index: -1,
  });

  const getIsSelectedTodo = (index) => {
    const isSelectedTodo = changeTodoNote.index === index;
    return isSelectedTodo;
  };

  const toChangeTodo = () => {
    if (changeTodoNote.title.trim()) {
      const { title, index } = changeTodoNote;
      dispatch(changeTodo({ index, title }));
      setChangeTodoNote({
        title: "",
        index: -1,
      });
    }
  };

  const getIsVisible = (elem) => {
    const isVisible =
      (filter === "Active" && elem.isActive) ||
      (filter === "Completed" && !elem.isActive) ||
      filter === "All";
    return isVisible;
  };
  const getToChangeTodoNote = (elem, index) =>
    setChangeTodoNote({ title: elem.title, index: index });
  const startToChangeTodoNote = (e) =>
    setChangeTodoNote({
      ...changeTodoNote,
      title: e.target.value,
    });
  const toSwitchIsActiveTodo = (index) => dispatch(switchIsActiveTodo(index));
  const toDeleteTodo = (index) => dispatch(deleteTodo(index));

  return (
    <>
      <StyledPanel>
        {todos &&
          todos.length !== 0 &&
          todos.map(
            (elem, index) =>
              getIsVisible(elem) && (
                <StyledNote
                  key={index}
                  onDoubleClick={() => {
                    getToChangeTodoNote(elem, index);
                  }}
                >
                  {getIsSelectedTodo(index) ? (
                    <StyledInputNote
                      value={changeTodoNote.title}
                      onChange={(e) => startToChangeTodoNote(e)}
                      autoFocus
                      onBlur={toChangeTodo}
                    />
                  ) : (
                    <StyledTitleTodo>
                      <StyledCheckbox
                        checked={!elem.isActive}
                        onChange={() => toSwitchIsActiveTodo(index)}
                      />
                      <StyledLabelCheck
                        checked={!elem.isActive}
                      ></StyledLabelCheck>
                      <StyledLabelNote checked={!elem.isActive}>
                        {elem.title}
                      </StyledLabelNote>
                      <StyledButtonDestroy onClick={() => toDeleteTodo(index)}>
                        ??
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
