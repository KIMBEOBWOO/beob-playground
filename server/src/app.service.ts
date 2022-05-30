import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Server Port :::: ' + process.env.SERVER_PORT;
  }
}
