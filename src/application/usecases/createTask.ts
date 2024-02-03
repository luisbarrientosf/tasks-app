import { Task, TaskStatus } from "domain/entities/Task";
import { TaskRepository } from "domain/repositories/TaskRepository";

export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async run(title: string, status: TaskStatus): Promise<Task> {
    return await this.taskRepository.create(title, status);
  }
}