import { Controller, Post, Request } from "@nestjs/common";

@Controller("/v1/play-logs")
export class PlayLogsController {
  @Post("/on-insert")
  onInsert(@Request() request): string {
    console.log(request.body.record);
    return "OK";
  }
}
