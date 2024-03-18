import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main.ts', { timestamp: true });
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors
<<<<<<< HEAD
  const port = 3000;
  await app.listen(port);
  
  logger.log(`Application is listening on port ${port}`)
=======
  await app.listen(3030);
>>>>>>> 2962990ede20cb55f127d511bfebc2b34a82a17c
}
bootstrap();
