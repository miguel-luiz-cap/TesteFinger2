import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import {Observable} from 'rxjs';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private http: HttpService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get()
  // jsonShow() {
  //   return this.appService.jsonShow();   
  // }

}
