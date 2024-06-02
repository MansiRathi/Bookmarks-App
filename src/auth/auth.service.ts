import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I am Signed Up!' };
  }
  signin() {
    return { msg: 'I am Signed In!' };
  }
}
