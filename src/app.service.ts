import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios'


@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
    //return this.httpService.get<{ id: number, name: string, email: string, address:any }[]>('https://jsonplaceholder.typicode.com/users');
  }

  async jsonShow() {
    const a = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    return a.data;
  }
}
