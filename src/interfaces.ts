export interface TodoList {
  title: string;
  isActive: boolean;
}

export interface TodosState {
  todoList: TodoList[];
  filter: string;
}

export interface ChangeTodo {
  index: number;
  title: string;
}
