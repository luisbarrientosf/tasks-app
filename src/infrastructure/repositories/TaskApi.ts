import { Task, TaskStatus } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { TaskMapper } from "../../infrastructure/mappers/TaskMapper";
import { GetTodoResponse } from "./GetTodoResponse.dto";

export class TaskApi implements TaskRepository {
  async get(): Promise<Task[]> {
    const todos: GetTodoResponse[] = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then(response => response.json());
    
    return TaskMapper.fromGetTodoResponse(todos);
  }

  async create(title: string, status: string): Promise<Task> {
    const task = new Task("dummy", title, status);

    const todo: GetTodoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos", { 
        method: "POST",
        body: JSON.stringify({
          title: task.title,
          completed: task.status === TaskStatus.COMPLETED
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(response => response.json());

    return new Task(todo.id.toString(), task.title, task.status);
  }

  async update(taskId: string, title: string, status: string): Promise<Task> {
    const task = new Task(taskId, title, status);

    await fetch(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`, { 
        method: "PUT",
        body: JSON.stringify({
          title: task.title,
          completed: task.status === TaskStatus.COMPLETED
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(response => response.json());

    return task;
  }

  async delete(taskId: string): Promise<void> {
    await fetch(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`, { 
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(response => response.json());
  }
}