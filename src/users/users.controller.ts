import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
import { Company } from './entities/company.entity';
import { Geo } from './entities/geo.entity';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //@Cron('* * * * * *')
  @Cron(CronExpression.EVERY_30_SECONDS)
  updateAll() {
    console.log("Passou 5 min");
    return this.usersService.updateAll();
  }

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAllUser();
  }

  @Get()
  findAllUser() {
    return this.usersService.findAllUser();
  }
  @Get('address')
  findAllAddress() {
    return this.usersService.findAllAddress();
  }
  @Get('company')
  findAllCompany() {
    return this.usersService.findAllCompany();
  }
  @Get('geo')
  findAllGeo() {
    return this.usersService.findAllGeo();
  }
  
  @Get('criar')
  createAll() {
    return this.usersService.createAll();
  }

  @Get('createUser')
  async createUser(@Body() usersData: User): Promise<any> {
    return this.usersService.createUser(usersData);
  }

  @Get('createAddress')
  async createAddress(@Body() addressData: Address): Promise<any> {
    return this.usersService.createAddress(addressData);
  }

  @Get('createCompany')
  async createCompany(@Body() companyData: Company): Promise<any> {
    return this.usersService.createCompany(companyData);
  }

  @Get('createGeo')
  async createGeo(@Body() geoData: Geo): Promise<any> {
    return this.usersService.createGeo(geoData);
  }


  @Put(':id/update')
  async updateUser(@Param('id') id, @Body() usersData: User): Promise<any> {
    usersData.id = Number(id);
    console.log('Update #' + usersData.id)
    return this.usersService.updateUser(usersData);
  }
  @Put(':id/update')
  async updateAddress(@Param('id') id, @Body() addressData: Address): Promise<any> {
    addressData.id = Number(id);
    console.log('Update #' + addressData.id)
    return this.usersService.updateAddress(addressData);
  }
  @Put(':id/update')
  async updateCompany(@Param('id') id, @Body() companyData: Company): Promise<any> {
    companyData.id = Number(id);
    console.log('Update #' + companyData.id)
    return this.usersService.updateCompany(companyData);
  }
  @Put(':id/update')
  async updateGeo(@Param('id') id, @Body() geoData: Geo): Promise<any> {
    geoData.id = Number(id);
    console.log('Update #' + geoData.id)
    return this.usersService.updateGeo(geoData);
  }

  @Delete(':id/delete')
  async deleteUser(@Param('id') id): Promise<any> {
    return this.usersService.deleteUser(id);
  }
  @Delete(':id/delete')
  async deleteAddress(@Param('id') id): Promise<any> {
    return this.usersService.deleteAddress(id);
  }
  @Delete(':id/delete')
  async deleteCompany(@Param('id') id): Promise<any> {
    return this.usersService.deleteCompany(id);
  }
  @Delete(':id/delete')
  async deleteGeo(@Param('id') id): Promise<any> {
    return this.usersService.deleteGeo(id);
  }
}