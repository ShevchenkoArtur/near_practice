import {Todo, UpdateDto} from "./model";

export function create(text: string): Todo {
  return Todo.create(text);
}

export function getById(id: i32): Todo {
  return Todo.getById(id);
}

export function getTodos(offset: i32, limit: i32 = 10): Todo[] {
  return Todo.getTodos(offset, limit);
}

export function getByIdAndUpdate(id: i32, dto: UpdateDto): Todo {
  return Todo.getByIdAndUpdate(id, dto);
}