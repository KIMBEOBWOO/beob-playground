import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '요거는 새로 배포된 텍스트지 :::: ' + process.env.SERVER_PORT;
  }
}
