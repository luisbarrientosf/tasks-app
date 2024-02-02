import { Task } from "domain/entities/Task";

export interface TaskRepository {
  get(): Promise<Task[]>;
  create(title: string, status: string): Promise<Task>;
  update(taskId: string, title: string, status: string): Promise<Task>;
  delete(taskId: string): Promise<void>;
}