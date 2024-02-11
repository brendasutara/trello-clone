export interface ToDo {
  id : string;
  title: string;
  description?: string;
}

export interface Column {
  title: string;
  todos: ToDo[];
}
