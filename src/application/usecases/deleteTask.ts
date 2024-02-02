import { TaskRepository } from "domain/repositories/TaskRepository";

export class DeleteTask {
  constructor(private taskRepository: TaskRepository) {}

  async run(taskId: string): Promise<void> {
    return await this.taskRepository.delete(taskId);
  }
}