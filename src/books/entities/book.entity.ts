import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamp } from './generics/timestamp.js';
import { AuthorEntity } from './author.entity.js';

@Entity('livre')
export class BookEntity extends TimeStamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
    })
    title: string;

    @ManyToOne((type) => AuthorEntity, (e) => e.id)
    author;

    @Column({
        type: 'int',
    })
    year: number;

    @Column()
    image: string;
}

// @Column(
//   {
//       type : 'varchar',
//       length : 100,
//       nullable : false,
//       unique : true,
//       readonly : true,
//       update : true
//   }
