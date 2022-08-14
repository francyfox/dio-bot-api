import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('message')
@ApiTags('Message')
export class MessageController {
  @Post()
  sendMessage() {
    return null;
  }
}
