import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  signup() {
    return { msg: 'I am Signed Up!' };
  }
  signin() {
    return { msg: 'I am Signed In!' };
  }
}
