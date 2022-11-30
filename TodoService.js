"use strict";
exports.__esModule = true;
exports.TodoService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var TodoService = /** @class */ (function () {
    function TodoService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.todos = new Array;
        this.dataSource.getTodos().forEach(function (t) { return _this.todos.push(t); });
    }
    TodoService.prototype.getById = function (id) {
        return this.todos.filter(function (t) { return t.id === id; })[0];
    };
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.saveTodo = function (todo) {
        if (todo.id != 0 || todo.id != null) {
            todo.id = this.generateId();
            this.todos.push(todo);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id === todo.id) {
                    index = i;
                }
            }
            this.todos.splice(index, 1, todo);
        }
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        if (index > 0) {
            this.todos.splice(index, 1);
        }
    };
    TodoService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return TodoService;
}());
exports.TodoService = TodoService;
