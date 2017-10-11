export class Model{
    // user: string = 'Viktor';
    user: string;
    items: TodoItem[];

    constructor(){
        this.user = 'Viktor';
        this.items = [new TodoItem("Buy Flowers", true, 1),
        new TodoItem("Get Shoes", false, 2),
        new TodoItem("Collect Tickets", true, 3),
        new TodoItem("Call Joe", false, 4)]
    }
}

export class TodoItem{
    id;
    action: string;
    done: boolean;

    constructor(action, done, id){
        this.id = id;
        this.action = action;
        this.done = done;
    }
}