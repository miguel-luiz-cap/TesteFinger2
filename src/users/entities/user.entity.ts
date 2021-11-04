import { Entity, Column, PrimaryGeneratedColumn, RelationId, OneToOne, JoinColumn } from 'typeorm';
import { Company } from "./company.entity";
import { Address } from "./address.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "100" })
  name: string;

  @Column({ type: "varchar", length: "100" })
  username: string;
  
  @Column({ type: "varchar", length: "100" })
  email: string;
  
  @OneToOne(() => Address, address => address.id, {cascade: true} )
  @JoinColumn()
  address: Address;
  
  @Column({ type: "varchar", length: "100" })
  phone: string;
  
  @Column({ type: "varchar", length: "100" })
  website: string;
  
  @OneToOne(() => Company, company => company.id, {cascade: true})
  @JoinColumn()
  company: Company;

}