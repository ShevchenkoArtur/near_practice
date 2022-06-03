import { PersistentUnorderedMap, math } from "near-sdk-as";

export const todos = new PersistentUnorderedMap<u32, Todo>("todos");

@nearBindgen
export class UpdateDto {
    text: string;
    done: bool;
}

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

    static create(text: string): Todo {
        const todo = new Todo(text);
        todos.set(todo.id, todo);
        return todo;
    }

    static getById(id: i32): Todo {
        return todos.getSome(id);
    }

    static getTodos(offset: i32, limit: i32): Todo[] {
        return todos.values(offset, offset + limit);
    }

    static getByIdAndUpdate(id: i32, dto: UpdateDto): Todo {
        const todo = this.getById(id);
        todo.text = dto.text;
        todo.done = dto.done;
        todos.set(id, todo);
        return todo;
    }

    static del(id: i32): void {
        todos.delete(id);
    }
}