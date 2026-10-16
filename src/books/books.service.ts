import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(BookEntity) private bookRepo: Repository<BookEntity>) { }

    async addBook(newBook) {
        try {
            let result = await this.bookRepo.save(newBook);
            return result
        }
        catch (e) {
            throw new InternalServerErrorException();
        }
    }

    async getBooks() {
        try {
            let resultat = await this.bookRepo.find()
            return resultat
        }
        catch (e) {
            throw new InternalServerErrorException();
        }

    }

    async getBookById(id) {
        let res = await this.bookRepo.findOne({ where: { id } })
        if (!res)
            throw new NotFoundException(`Le livre d'id ${id} n'existe pas `)

        return res
        // let res = await this.bookRepo.find(
        //     {
        //         where : {
        //             id : bookId
        //         }
        //     }
        // )
        // if(!res.length)
        //     throw new NotFoundException(`Le livre d'id ${bookId} n'existe pas `)

        // return res[0]

    }

    deleteBook() {

    }

    async updateBook(bookId, uBook) {
        let updatedBook = await this.bookRepo.preload({
            id: bookId,
            ...uBook,
            // title: uBook.title,
            // image: uBook.image,
            // year: uBook.year
        })

        if (!updatedBook) {
            throw new NotFoundException(`Le livre d'id ${bookId} n'existe pas pour être modifié`)
        }
        return await this.bookRepo.save(updatedBook)


    }


}
