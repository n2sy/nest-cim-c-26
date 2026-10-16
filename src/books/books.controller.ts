import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service.js';

@Controller('books')
export class BooksController {

    @Inject(BooksService) bookService: BooksService;

    @Post('add')
    async ajouterLivre(@Body() body: any) {
        let r = await this.bookService.addBook(body);
        return { message: "Book added successfully", bookId: r.id };

    }

    @Get()
    async lireTousLesLivres() {
        let r = await this.bookService.getBooks();
        return r
    }

    @Get(':bookId')
    async lireLivreParId(@Param('bookId') id) {
        let r = await this.bookService.getBookById(id);
        return { message: "Book found", book: r }
    }

    @Put("edit/:bookId")
    async modifierLivre(@Param('bookId', ParseIntPipe) id, @Body() uBook) {
        let r = await this.bookService.updateBook(id, uBook);
        return { message: "Book updated", bookId: r.id }

    }



}
