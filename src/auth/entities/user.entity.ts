import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "../generics/role.enum.js";
import { TimeStamp } from "../../books/entities/generics/timestamp.js";


@Entity("user")
export class UserEntity extends TimeStamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: "varchar",
            unique: true
        }
    )
    email;
    @Column(
        {
            type: "varchar",
            unique: true
        }
    )
    username;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column(
        {
            type: "enum",
            enum: Roles,
            //default : Roles.ROLE_USER,

        }
    )
    role;
}
