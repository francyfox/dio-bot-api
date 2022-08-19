import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupService } from './group.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Group } from './group.model';

@Controller('group')
@ApiTags('Group')
export class GroupController {
  constructor(private groupService: GroupService) {}
  @ApiOperation({ summary: 'Создание группы' })
  @ApiResponse({ status: 200, type: Group })
  @Post()
  create(@Body() GroupDto: CreateGroupDto) {
    return this.groupService.createGroup(GroupDto);
  }

  @ApiOperation({ summary: 'Получение всех групп' })
  @ApiResponse({ status: 200, type: [Group] })
  @Get()
  getAll() {
    return this.groupService.getAllGroups();
  }

  @ApiOperation({ summary: 'Получение группы по значению' })
  @ApiResponse({ status: 200, type: [Group] })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.groupService.getGroupByValue(value);
  }
}
