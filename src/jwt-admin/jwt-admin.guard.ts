import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from '../auth/generics/role.enum.js';

@Injectable()
export class JwtAdminGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        let req = context.switchToHttp().getRequest();
        if (req.user.role == Roles.ROLE_ADMIN)
            return true;
        return false
    }
}
