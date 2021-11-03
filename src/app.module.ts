import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Address } from './users/entities/address.entity';
import { Company } from './users/entities/company.entity';
import { Geo } from './users/entities/geo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      // password: '123',
      database: 'migueltestefinger',
      entities: [User, Address, Company, Geo],
      synchronize: true,
    }),
    HttpModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
