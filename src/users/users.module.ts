import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
import { Company } from './entities/company.entity';
import { Geo } from './entities/geo.entity';
import { HttpModule, HttpService } from '@nestjs/axios';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    HttpModule,
    //HttpService,
    TypeOrmModule.forFeature([User, Address, Company, Geo]),
  ]
})
export class UsersModule {}