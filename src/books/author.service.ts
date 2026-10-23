import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
    constructor(@InjectRepository(AuthorEntity) private authRepo: Repository<AuthorEntity>) {

    }
    getAllAuthors() {
        return this.authRepo.find()
    }
    getAuthorById(authorId: number) {
        return this.authRepo.findOne({ where: { id: authorId } })
    }
    addAuthor(newAuthor) {
        return this.authRepo.save(newAuthor)
    }
}
