import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
  _tasks: TaskModel[] = [
    { id: 1, description: 'Feed the cat1' },
    { id: 2, description: 'Feed the cat2' },
    { id: 3, description: 'Feed the cat3' },
  ];

  findAllTasks(): TaskModel[] {
    return this._tasks;
  }

  findTaskById(id: number): TaskModel {
    return this._tasks.find((t) => t.id == id);
  }

  addTask(id: number, description: string) {
    const newTask = new TaskModel(4, description);
    this._tasks.push(newTask);
    return newTask;
  }
}
