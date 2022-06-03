import {create, del, getById, getByIdAndUpdate, getTodos} from '../index';
import {Todo, todos} from '../model';

describe('contract methods', () => {
    it('creates a todo', () => {
        const todo = create('Drink water');
        expect(todos.getSome(todo.id)).toStrictEqual(todo);
    });
    it('return a todo by id', () => {
        const todo = Todo.create('testTodo');
        expect(getById(todo.id)).toStrictEqual(todo);
    });

    it('gets a list of todos', () => {
        const todos = new Array<number>(100)
            .fill(0)
            .map<Todo>((_, i) => Todo.create('todo' + i.toString()))

        expect(getTodos(20)).toStrictEqual(todos.slice(20, 30));
        expect(getTodos(0, 10)).toStrictEqual(todos.slice(0, 10));
        expect(getTodos(10, 10)).toStrictEqual(todos.slice(10, 20));
        expect(getTodos(50, 50)).toStrictEqual(todos.slice(50, 100));
    });
    it('update todo', () => {
        const todo = Todo.create('test');
        getByIdAndUpdate(todo.id, {text: 'test1', done: true});
        const todoAfterUpdate = Todo.getById(todo.id);
        expect(todoAfterUpdate.id).toStrictEqual(todo.id);
        expect(todoAfterUpdate.text).toStrictEqual('test1');
        expect(todoAfterUpdate.done).toStrictEqual(true);
    });
    itThrows('delete a todo', () => {
       const todo = Todo.create('test');
       del(todo.id);
       Todo.getById(todo.id);
    });
});