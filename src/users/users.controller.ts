import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
import { Contact } from './entities/contact.entity';
// import { Geo } from './entities/geo.entity';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //@Cron('* * * * * *')
  // @Cron(CronExpression.EVERY_5_MINUTES)
  // updateAll() {
  //   console.log("Passou 5 min");
  //   return this.usersService.updateAll();
  // }

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
  @Get('contact')
  findAllContact() {
    return this.usersService.findAllContact();
  }
  
  // @Get('criar')
  // createAll() {
  //   return this.usersService.createAll();
  // }

  @Get('createUser')
  async createUser(@Body() usersData: User): Promise<any> {
    return this.usersService.createUser(usersData);
  }

  @Get('createAddress')
  async createAddress(@Body() addressData: Address): Promise<any> {
    return this.usersService.createAddress(addressData);
  }

  @Get('createContact')
  async createContact(@Body() contactData: Contact): Promise<any> {
    return this.usersService.createContact(contactData);
  }

  // @Get('createGeo')
  // async createGeo(@Body() geoData: Geo): Promise<any> {
  //   return this.usersService.createGeo(geoData);
  // }


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
  async updateContact(@Param('id') id, @Body() contactData: Contact): Promise<any> {
    contactData.id = Number(id);
    console.log('Update #' + contactData.id)
    return this.usersService.updateContact(contactData);
  }
  // @Put(':id/update')
  // async updateGeo(@Param('id') id, @Body() geoData: Geo): Promise<any> {
  //   geoData.id = Number(id);
  //   console.log('Update #' + geoData.id)
  //   return this.usersService.updateGeo(geoData);
  // }

  @Delete(':id/delete')
  async deleteUser(@Param('id') id): Promise<any> {
    return this.usersService.deleteUser(id);
  }
  @Delete(':id/delete')
  async deleteAddress(@Param('id') id): Promise<any> {
    return this.usersService.deleteAddress(id);
  }
  @Delete(':id/delete')
  async deleteContact(@Param('id') id): Promise<any> {
    return this.usersService.deleteContact(id);
  }
  // @Delete(':id/delete')
  // async deleteGeo(@Param('id') id): Promise<any> {
  //   return this.usersService.deleteGeo(id);
  // }
}