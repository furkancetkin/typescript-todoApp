import { ITodoService } from "./ITodoService";
import { SimpleDataSource } from "./SimpleDataSource";
import { TodoItem } from "./TodoItem";

export class TodoService implements ITodoService {

    private dataSource: SimpleDataSource;
    private todos: Array<TodoItem>;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.todos = new Array<TodoItem>;
        this.dataSource.getTodos().forEach(t => this.todos.push(t));
    }


    getById(id: number): TodoItem {
        return this.todos.filter(t => t.id === id)[0];
    }
    getTodos(): TodoItem[] {
        return this.todos;
    }
    saveTodo(todo: TodoItem): void {
        if (todo.id != 0 || todo.id != null) {
            todo.id = this.generateId();
            this.todos.push(todo);
        } else {
            let index;
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id === todo.id) {
                    index = i;
                }
            }
            this.todos.splice(index, 1, todo);
        }
    }
    deleteTodo(todo: TodoItem): void {
        let index = this.todos.indexOf(todo);
        if (index > 0) {
            this.todos.splice(index, 1);
        }
    }

    private generateId(): number {
        let key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    }

}