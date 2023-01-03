import { Module } from "@nestjs/common";
import { PlayLogsController } from "./play-logs/play-logs.controller";

@Module({
  controllers: [PlayLogsController],
})
export class RestModule {}
