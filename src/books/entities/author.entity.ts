import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimeStamp } from "./generics/timestamp.js";
import { BookEntity } from "./book.entity.js";


@Entity('auteur')
export class AuthorEntity extends TimeStamp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    prenom: string;

    @Column()
    nom: string

    //@OneToMany(type => BookEntity, (e) => e.id) // Complétement INUTILE
    //listeLivres
}
