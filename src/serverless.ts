import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import morgan from 'morgan';

import { AppModule } from './app.module';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use(morgan('dev'));

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();

  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());

  return server(event, context, callback);
};
