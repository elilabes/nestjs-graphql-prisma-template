import { Module } from "@nestjs/common";
import { TestingModule } from "./testing/testing.module";

@Module({
  imports: [TestingModule],
})
export class GqlModule {}
