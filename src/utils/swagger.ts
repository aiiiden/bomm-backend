import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Swagger 를 세팅하기 위한 유틸함수
 * @param {INestApplication} app
 */

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Bomm-Backend')
    .setDescription('API Document')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}
