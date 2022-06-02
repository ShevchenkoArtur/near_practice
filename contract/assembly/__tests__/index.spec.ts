import { create } from "../index";
import { Todo, todos } from "../model";

describe("contract methods", () => {
    it("creates a todo", () => {
        // call the create method
        const todo = create("Drink water");

        // lookup in the PersistentUnorderedMap for our todo
        // expect the persisted todo to equal the todo returned
        // by the create method above.
        expect(todos.getSome(todo.id)).toStrictEqual(todo);
    });
});