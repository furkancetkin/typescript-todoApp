"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var TodoItem_1 = require("./TodoItem");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.todos = new Array(new TodoItem_1.TodoItem(1, 'Shopping', false, new Date(), 'Go to the supermarket'), new TodoItem_1.TodoItem(2, 'Repair car', false, new Date(), 'Fix broken brakes'), new TodoItem_1.TodoItem(3, 'Medicine', false, new Date(), 'Take medicine'));
    }
    SimpleDataSource.prototype.getTodos = function () {
        return this.todos;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
