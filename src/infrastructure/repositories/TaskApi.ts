import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { TaskMapper } from "../../infrastructure/mappers/TaskMapper";
import { GetTodoResponse } from "./GetTodoResponse.dto";
import { wait } from "../../infrastructure/utils";


export class TaskApi implements TaskRepository {
  async get(): Promise<Task[]> {
    const todos: GetTodoResponse[] = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json());
    
    return TaskMapper.fromGetTodoResponse(todos);
  }

  async create(title: string, status: string): Promise<Task> {
    await wait(2000);
    console.log("creating", title);
    return new Task("1", title, status);
  }

  async update(taskId: string, title: string, status: string): Promise<Task> {
    await wait(2000);
    console.log("update", taskId);
    return new Task(taskId, title, status);
  }

  async delete(taskId: string): Promise<void> {
    await wait(2000);
    console.log("deleting", taskId);
  }
}