/* eslint-disable prefer-const */
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { TaskService } from '../task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.findAllTasks();
  }

  @Get(':taskId')
  getTaskById(@Param('taskId') id: number) {
    let task = this.taskService.findTaskById(id);

    if (!task) {
      throw new NotFoundException(`Task with Id ${id} not found`);
    }

    return task;
  }

  @Post()
  addTask(
    @Body('description') id: number,
    @Body('description') description: string,
  ) {
    const newTask = this.taskService.addTask(id, description);
    return {
      task: newTask,
    };
  }
}
