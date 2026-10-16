import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TasksController } from './tasks.controller.js';
import { TasksService } from './tasks.service.js';
import { LoggerMiddleware } from '../logger/logger.middleware.js';
import { DecryptMiddleware } from '../decrypt/decrypt.middleware.js';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(LoggerMiddleware).forRoutes('')
        // consumer.apply(LoggerMiddleware).forRoutes('tasks/all/*')
        consumer.apply(LoggerMiddleware).forRoutes(
            {
                path : 'tasks/*',
                method : RequestMethod.GET
            }
        )
        // consumer.apply(LoggerMiddleware, DecryptMiddleware).forRoutes(
        //     {
        //         path : 'tasks/*',
        //         method : RequestMethod.GET
        //     }
        // )
        
        
        
    }
}
