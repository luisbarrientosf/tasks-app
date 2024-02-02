import { Task, TaskStatus } from "../../domain/entities/Task";
import { GetTodoResponse } from "../repositories/GetTodoResponse.dto";

export class TaskMapper {
  static fromGetTodoResponse(todos: GetTodoResponse[]) {
    return todos.map(todo => {
      const completed = todo.completed ? TaskStatus.COMPLETED : TaskStatus.PENDING;
      return new Task(todo.id.toString(), todo.title, completed);
    });
  }
}