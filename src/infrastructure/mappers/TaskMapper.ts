import { Task, TaskStatus } from "../../domain/entities/Task";
import { TodoResponse } from "../repositories/TodoResponse.dto";

export class TaskMapper {
  static fromTodoResponse(todos: TodoResponse[]) {
    return todos.map(todo => {
      const completed = todo.completed ? TaskStatus.COMPLETED : TaskStatus.PENDING;
      return new Task(todo.id.toString(), todo.title, completed);
    });
  }
}