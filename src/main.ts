import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My Server')
    .setDescription('Documentation my server project')
    .setVersion('1.0.0')
    .addTag('server')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000, () =>
    console.log(`Server start on port ${process.env.PORT}`),
  );
}
bootstrap();
