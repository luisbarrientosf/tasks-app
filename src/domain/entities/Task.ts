export enum TaskStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED"
}

export class Task {
  id: string;
  title: string;
  status: TaskStatus;

  constructor(id: string, title: string, status: string){
    this.ensureValidValues(id, title, status);
    this.id = id;
    this.title = title;
    this.status = status as TaskStatus;
  }

  ensureValidValues(id: string, title: string, status: string){
    if(id === "") {
      throw new Error("title can't be empty");
    }

    if(title === "") {
      throw new Error("title can't be empty");
    }

    const validStatus = Object.values(TaskStatus);
    if(!validStatus.find(s => s === status)){
      throw new Error("status are invalid");
    }
  }
}