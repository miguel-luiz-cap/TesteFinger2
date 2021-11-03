import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('create')
  async create(@Body() usersData: User): Promise<any> {
    return this.usersService.create(usersData);
  }


  @Put(':id/update')
  async update(@Param('id') id, @Body() usersData: User): Promise<any> {
    usersData.id = Number(id);
    console.log('Update #' + usersData.id)
    return this.usersService.update(usersData);
  }

  @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.usersService.delete(id);
    }  
  /*
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }*/
}