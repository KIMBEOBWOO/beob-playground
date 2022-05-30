import {
  Controller,
  Get,
  Headers,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers() header): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getCRSFTest(@Req() req, @Res() res, @Query('data') data: string) {
    const csrfToken = req.csrfToken();

    console.log(data);

    res.send({ csrfToken, data });
  }

  @Post()
  postTest() {
    return 'true';
  }
}
