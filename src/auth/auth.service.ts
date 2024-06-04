import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDto } from './dto';
@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    //save the new user in the DB
    const user = await this.prismaService.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    delete user.hash;
    //return the new user
    return user;
  }
  signin() {
    return { msg: 'I am Signed In!' };
  }
}
