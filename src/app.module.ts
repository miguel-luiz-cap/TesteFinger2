import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Address } from './users/entities/address.entity';
import { Contact } from './users/entities/contact.entity';
// import { Geo } from './users/entities/geo.entity';
import { ScheduleModule } from '@nestjs/schedule';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './app/_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './app/_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home';
import { LoginComponent } from './app/login';
import { RegisterComponent } from './app/register';
import { AlertComponent } from './app/_components';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      // password: '123',
      database: 'migueltestefinger',
      entities: [User, Address, Contact],
      synchronize: true,
    }),
    HttpModule,
    UsersModule,
    ScheduleModule.forRoot(),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      appRoutingModule
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      AlertComponent
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

      // provider used to create fake backend
      //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private connection: Connection) {}
}
