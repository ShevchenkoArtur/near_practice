import { PersistentUnorderedMap, math } from "near-sdk-as";

export const todos = new PersistentUnorderedMap<u32, Todo>("todos");

@nearBindgen
export class Todo {
    id: u32;
    text: string;
    done: bool;

    constructor(text: string) {
        this.id = math.hash32<string>(text);
        this.text = text;
        this.done = false;
    }

    static insert(text: string): Todo {
        // create a new Todo
        const todo = new Todo(text);

        // add the todo to the PersistentUnorderedMap
        // where the key is the todo's id and the value
        // is the todo itself. Think of this like an
        // INSERT statement in SQL.
        todos.set(todo.id, todo);

        return todo;
    }
}