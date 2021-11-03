import { Entity, Column, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Company } from "./company.entity";
import { Address } from "./address.entity";


@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: "100" })
  name: string;

  @Column({ type: "varchar", length: "100" })
  username: string;
  
  @Column({ type: "varchar", length: "100" })
  email: string;
  
  @RelationId((address: Address) => address.AddId)
  address: number;
  
  @Column({ type: "varchar", length: "100" })
  phone: string;
  
  @Column({ type: "varchar", length: "100" })
  website: string;
  
  @RelationId((company: Company) => company.CompId)
  company: number;

}