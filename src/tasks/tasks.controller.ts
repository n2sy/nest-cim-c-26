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

@Controller('tasks')
export class TasksController {
  //constructor(private taskSer: TasksService) {}
  @Inject(TasksService) taskSer;

  @Get('hello')
  afficherSalut() {}

  @Get('all')
  getAllTasks() {}

  @Get('stats')
  nbreTask() {}

  @Get('search/:id')
  getTaskById() {}

  @Post('add')
  addNewTask() {}

  @Put('edit/:id')
  updateTask() {}

  @Delete('delete/:deleteId')
  deleteTask() {}
}
