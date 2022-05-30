import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(cookieParser());
  // app.use(csurf({ cookie: true, ignoreMethods: ['GET', 'HEAD', 'OPTIONS'] }));
  // app.use(helmet());

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
