import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { TasksService } from './tasks.service.js';
import { addTaskDto } from './DTO/addTask.dto.js';

@Controller('tasks')
export class TasksController {
  //constructor(private taskSer: TasksService) {}
  @Inject(TasksService) taskSer;

  @Get('all')
  getAllTasks() {
    let res = this.taskSer.getAllTasks();
    return { tasks: res };
  }

  @Get('stats')
  nbreTask(
    @Query('year1', ParseIntPipe) y1: number,
    @Query('year2', ParseIntPipe) y2: number,
  ) {
    let res = this.taskSer.getNbTasks(y1, y2);
    return { tasksTrouves: res };
  }

  @Get('search/:taskId')
  getTaskById(@Param('taskId') taskId: any) {
    console.log(taskId);
    let res = this.taskSer.getTaskById(taskId);
    return { taskTrouve: res };
  }
  //   getTaskById(@Param() p: any) {
  //     let res = this.taskSer.getTaskById(p.taskId);
  //     return { taskTrouve: res };
  //   }

  @Post('add')
  addNewTask(@Body() corps: addTaskDto) {
    let res = this.taskSer.addNewTask(corps);
    return { res };
  }

  @Put('edit/:id')
  updateTask(@Param('id') taskId: any, @Body() uTask: any) {
    let res = this.taskSer.updateTask(taskId, uTask);
    return { message: 'Task updated successfully', updatedTask: res };
  }

  @Delete('delete/:deleteId')
  deleteTask(@Param('deleteId') taskId: any) {
    let res = this.taskSer.deleteTask(taskId);
    return { message: 'Task deleted successfully', tasks: res };
  }
}
