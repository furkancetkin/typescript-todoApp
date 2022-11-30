import { TodoItem } from "./TodoItem";

export interface ITodoService{
    getById(id: number): TodoItem;
    getTodos(): Array<TodoItem>;
    saveTodo(todo: TodoItem): void;
    deleteTodo(todo: TodoItem): void;
}