import { TodoItem } from "./TodoItem";
import { TodoService } from "./TodoService";

let _todoService = new TodoService();

let todos: Array<TodoItem>;
let todo: TodoItem;

let t = new TodoItem(2, 'Play with baby', false, new Date());

_todoService.saveTodo(t);
todos = _todoService.getTodos();
todo = _todoService.getById(4);

console.log('All Todos : ', todos);
console.log('One Todo : ', todo);