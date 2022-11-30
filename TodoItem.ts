export class TodoItem {
    constructor(
        public id: number,
        public title: string,
        public isCompleted: boolean,
        public createdDate: Date,
        public description?: string
    ){}
}