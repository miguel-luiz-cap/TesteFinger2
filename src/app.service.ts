import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios'
import { ArrayMaxSize } from 'class-validator';


@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }
  getHello(): string {
    return 'Hello World!';
    //return this.httpService.get<{ id: number, name: string, email: string, address:any }[]>('https://jsonplaceholder.typicode.com/users');
  }


  async jsonShow() {
    // let a = await axios.get('https://jsonplaceholder.typicode.com/users');
    // let user = a.data;
    
    // for(let i=0; i < 10; i++) {
    //   console.log(user[i].address)
    // }
    
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe( ( res ) => {
      console.log(res.data)
     }  );



    // return user[0].address.geo.lat;

    
  }
}
