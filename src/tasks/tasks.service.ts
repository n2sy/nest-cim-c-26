import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './models/task.model.js';

@Injectable()
export class TasksService {
  allTasks: Task[] = [
    {
      id: '1',
      title: 'Project 0',
      status: 'todo',
      year: 2025,
      createdAt: new Date(2024, 5, 6),
    },
    {
      id: '2',
      title: 'Project 1',
      status: 'done',
      year: 2025,
      createdAt: new Date(2024, 2, 3),
    },
    {
      id: '3',
      title: 'Project 1',
      status: 'in progress',
      year: 2026,
      createdAt: new Date(2025, 11, 10),
    },
  ];

  getNbTasks(y1, y2) {}

  getAllTasks() {}

  getTaskById(taskId) {}

  addNewTask(task) {}

  updateTask(taskId, uTask) {}

  deleteTask(taskId) {}
}
