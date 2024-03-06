import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

constructor(private prisma: PrismaService){}

 async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const passHash = await bcrypt.hash(createUserDto.senha, saltOrRounds )
    console.log('senha inserida',createUserDto.senha)
    console.log('Senha rachadinha',passHash)
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        senha : passHash,
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {id},
    
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where:{id}
    })
  }

  singIn(email: string){
    return this.prisma.user.findUnique({
      where:{email},
      
    })
  }
}
