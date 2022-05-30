import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'SERVER RUNNING ON :::: ' + process.env.SERVER_PORT;
  }
}
