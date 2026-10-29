import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity.js';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Roles } from './generics/role.enum.js';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>) { }

    async register(newUser: UserEntity) {
        let assignedRole;
        if (await this.userRepo.count() == 0) {
            assignedRole = Roles.ROLE_ADMIN
        }
        else
            assignedRole = Roles.ROLE_USER


        let userCreated = await this.userRepo.create(
            {
                email: newUser.email,
                username: newUser.username,
                salt: await bcrypt.genSalt(),
                role: assignedRole
            }
        );

        userCreated.password = await bcrypt.hash(newUser.password, userCreated.salt);
        let res = await this.userRepo.save(userCreated)
        return res
    }

    async login(userLog) {
        let { identifiant, password } = userLog; // Desrtucturation d'un objet
        let qb = this.userRepo.createQueryBuilder("user");

        const selectedUser = await qb.select('user')
            .where("user.username = :u1 OR user.email = :u1")
            .setParameter("u1", identifiant)
            .getOne()

        if (!selectedUser) throw new NotFoundException("Aucun user n'existe avec cet identifiant");

        const verif = await bcrypt.compare(password, selectedUser.password);
        if (!verif) throw new NotFoundException("Aucun user n'existe avec ce mot de passe");

        return selectedUser




    }


}
