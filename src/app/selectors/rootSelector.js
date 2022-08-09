import RootState from "../store";

export const selectCount = (RootState) => RootState.counter.value;
export const selectTodoList = (RootState) => RootState.todos.todoList;
export const selectTodoFilter = (RootState) => RootState.todos.filter;