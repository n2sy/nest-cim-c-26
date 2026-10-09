import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { TasksModule } from './tasks/tasks.module.js';
import { BooksModule } from './books/books.module.js';

@Module({
  imports: [TasksModule, BooksModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
