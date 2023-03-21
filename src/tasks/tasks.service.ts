import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first tasks',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = {
      title,
      description,
      status: TaskStatus.PENDING,
      id: crypto.randomUUID(),
    };

    this.tasks.push(task);
    return task;
  }

  getTaskById(taskId: string): Task {
    return this.tasks.find(({ id }) => id === taskId);
  }

  updateTask(id: string, updatedTaskValues: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedTaskValues);
    this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(({ id }) => id !== taskId);
  }
}
