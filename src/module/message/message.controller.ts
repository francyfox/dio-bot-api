import { Controller, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Post()
  sendMessage() {
    return null;
  }
}
