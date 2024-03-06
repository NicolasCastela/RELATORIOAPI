import {
    BadRequestException,
    HttpCode,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { UserService } from 'src/user/user.service';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
import AuthDto from './dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
  @Injectable()
  export class AuthService {
    constructor(
      private userService: UserService,
      private jwtService: JwtService,
    ) {}
  
    async singIn(
      email: string,
      senha: string,
    ): Promise<{ token: string; email: string; nome: string }> {
      const user = await this.userService.singIn(email)
      const passwordHashed = await bcrypt.compare(senha, user.senha);
      if (passwordHashed) {
        const payload = { email: user.email, sub: user.id, name: user.nome };
        return {
          token: this.jwtService.sign(payload),
          email: user.email,
          nome: user.nome,
        };
      }
      throw new UnauthorizedException('Cheque suas credenciais', {
        cause: new Error('Senha ou email incorretos'),
        description: 'Cheque suas credenciais',
      });
    }
  }
  