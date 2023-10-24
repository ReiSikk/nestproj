import { Injectable } from '@nestjs/common';

@Injectable() // Makes Depency Injection possible
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
