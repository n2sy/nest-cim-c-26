import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service.js';

@Controller('author')
export class AuthorController {
    constructor(private authService: AuthorService) { }
    @Get()
    chercherTousLesAuteurs() {
        let res = this.authService.getAllAuthors();
        return res;
    }

    @Get('authorId')
    chercherUnAuteur(@Param("authorId") id) {
        let res = this.authService.getAuthorById(id);
        return res
    }

    @Post("new")
    creerAuteur(@Body() newAuthor) {
        let res = this.authService.addAuthor(newAuthor)
        return res
    }
}
