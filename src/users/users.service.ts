import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Address } from './entities/address.entity';
import { Contact } from './entities/contact.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UsersService {

  constructor(
    private httpService: HttpService,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Address)
    private addressRepository: Repository<Address>,

    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) { }
  
  async findAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async findAllAddress(): Promise<Address[]> {
    return await this.addressRepository.find();
  }
  async findAllContact(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  /*async createAll() {
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe( ( res ) => {
      //console.log(res.data)
      this.userRepository.save(res.data)
      // for(let user of res.data) {
      //   await this.userRepository.save(user);
      // }
      
     }  );
  }

  async updateAll() {
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe( ( res ) => {
      console.log(res.data.length)
      
      for(let i=0; i < res.data.length ; i++) {
        this.userRepository.update(res.data[i].id, { 
          name: res.data[i].name,
          username: res.data[i].username,
          email: res.data[i].email,
          phone: res.data[i].phone,
          website: res.data[i].website
        } )

        this.addressRepository.update(res.data[i].id, {
          street: res.data[i].address.street,
          city: res.data[i].address.city,
          suite: res.data[i].address.suite,
          zipcode: res.data[i].address.zipcode
        })

        this.contactRepository.update(res.data[i].id, res.data[i].contact)
        this.geoRepository.update(res.data[i].id, res.data[i].address.geo)
      }
     }  );
  }
  */

  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
  async createAddress(address: Address): Promise<Address> {
    return await this.addressRepository.save(address);
  }
  async createContact(contact: Contact): Promise<Contact> {
    return await this.contactRepository.save(contact);
  }

  async updateUser(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.id, user);
  }
  async updateAddress(address: Address): Promise<UpdateResult> {
    return await this.addressRepository.update(address.id, address);
  }
  async updateContact(contact: Contact): Promise<UpdateResult> {
    return await this.contactRepository.update(contact.id, contact);
  }

  async deleteUser(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
  async deleteAddress(id): Promise<DeleteResult> {
    return await this.addressRepository.delete(id);
  }
  async deleteContact(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
