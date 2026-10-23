import { Module } from '@nestjs/common';
import { BooksController } from './books.controller.js';
import { BooksService } from './books.service.js';
import { BookEntity } from './entities/book.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity.js';
import { AuthorService } from './author.service.js';
import { AuthorController } from './author.controller.js';

@Module({
    imports: [TypeOrmModule.forFeature([BookEntity, AuthorEntity])],
    controllers: [BooksController, AuthorController],
    providers: [BooksService, AuthorService],
})
export class BooksModule { }
