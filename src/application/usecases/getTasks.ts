import { Task } from "domain/entities/Task";
import { TaskRepository } from "domain/repositories/TaskRepository";

export class GetTasks {
  constructor(private taskRepository: TaskRepository) {}

  async run(): Promise<Task[]> {
    return await this.taskRepository.get();
  }
}