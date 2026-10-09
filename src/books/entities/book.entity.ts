import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamp } from './generics/timestamp.js';

@Entity('livre')
export class BookEntity extends TimeStamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  title: string;

  @Column()
  author: string;

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
