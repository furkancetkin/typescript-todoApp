"use strict";
exports.__esModule = true;
exports.TodoItem = void 0;
var TodoItem = /** @class */ (function () {
    function TodoItem(id, title, isCompleted, createdDate, description) {
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
        this.createdDate = createdDate;
        this.description = description;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
