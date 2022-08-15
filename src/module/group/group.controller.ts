import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupService } from './group.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Group } from './group.model';

@Controller('group')
@ApiTags('Group')
export class GroupController {
  constructor(private usersService: GroupService) {}
  @ApiOperation({ summary: 'Создание группы' })
  @ApiResponse({ status: 200, type: Group })
  @Post()
  create(@Body() GroupDto: CreateGroupDto) {
    return this;
  }

  @ApiOperation({ summary: 'Получение всех групп' })
  @ApiResponse({ status: 200, type: [Group] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
