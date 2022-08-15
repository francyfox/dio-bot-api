import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('message')
@ApiTags('Message')
export class MessageController {
  @Post('user/:id/')
  sendMessageToUser() {
    return null;
  }

  @Post('group/:id/')
  sendMessageToGroup() {
    return null;
  }
}
