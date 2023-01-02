import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { useContainer } from "class-validator";
import "reflect-metadata";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Set class-validator to use the NestJS dependency
  // injection container
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Set nest to use class-validator for validation.
  // GraphQL validates missing properties so tell class-validator
  // to skip them.
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
    }),
  );

  await app.listen(3000);
}

bootstrap();
