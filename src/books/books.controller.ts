import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service.js';

@Controller('books')
export class BooksController {

    @Inject(BooksService) bookService: BooksService;

    @Post('add')
    async ajouterLivre(@Body() body: any) {
        let r = await this.bookService.addBook(body);
        return { message: "Book added successfully", bookId: r.id };

    }

    @Get('all')
    async lireTousLesLivres() {
        let r = await this.bookService.getBooks();
        return r
    }

    @Get(':bookId')
    async lireLivreParId(@Param('bookId') id) {
        let r = await this.bookService.getBookById(id);
        return { message: "Book found", book: r }
    }

    @Delete('soft/delete/:bookId')
    async softSupprimerBook(@Param('bookId') id) {
        let r = await this.bookService.softDelete(id);
        return { message: "Book deleted", resultat: r }
    }

    @Delete('soft/remove/:bookId')
    async softSupprimerBookV2(@Param('bookId') id) {
        let r = await this.bookService.softRemove(id);
        return { message: "Book deleted", resultat: r }
    }

    @Patch('restore/:bookId')
    async restaurerLivre(@Param('bookId') id) {
        let r = await this.bookService.restoreBook(id);
        return { message: "Book Restored", resultat: r }
    }
    @Patch('recover/:bookId')
    async restaurerLivreV2(@Param('bookId') id) {
        let r = await this.bookService.recoverBook(id);
        return { message: "Book Restored V2", resultat: r }
    }

    @Put("edit/:bookId")
    async modifierLivre(@Param('bookId', ParseIntPipe) id, @Body() uBook) {
        let r = await this.bookService.updateBook(id, uBook);
        return { message: "Book updated", bookId: r.id }

    }



}
