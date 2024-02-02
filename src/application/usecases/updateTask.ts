import { Task, TaskStatus } from "domain/entities/Task";
import { TaskRepository } from "domain/repositories/TaskRepository";

export class UpdateTask {
  constructor(private taskRepository: TaskRepository) {}

  async run(taskId: string, title: string, status: TaskStatus): Promise<Task> {
    return await this.taskRepository.update(taskId, title, status);
  }
}