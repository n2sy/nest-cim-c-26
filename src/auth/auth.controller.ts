import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("signup")
    async inscription(@Body() corps) {
        let res = await this.authService.register(corps)
        return { message: "User created", result: res }
    }
    @Post("signin")
    async authentifier(@Body() corps) {
        let res = await this.authService.login(corps)
        return { message: "User Authentified", result: res }
    }
}
