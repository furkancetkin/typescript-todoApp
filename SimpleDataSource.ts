import { TodoItem } from "./TodoItem";

export class SimpleDataSource {
    private todos: Array<TodoItem>;

    constructor() {
        this.todos = new Array<TodoItem>(
            new TodoItem(1, 'Shopping', false, new Date(), 'Go to the supermarket'),
            new TodoItem(2, 'Repair car', false, new Date(), 'Fix broken brakes'),
            new TodoItem(3, 'Medicine', false, new Date(), 'Take medicine'),
        )
    }

    getTodos(): TodoItem[] {
        return this.todos;
    }
}