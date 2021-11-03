import { Entity, Column, PrimaryGeneratedColumn, RelationId, ManyToOne, JoinColumn } from 'typeorm';
import { Company } from "./company.entity";
import { Address } from "./address.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: "100" })
  name: string;

  @Column({ type: "varchar", length: "100" })
  username: string;
  
  @Column({ type: "varchar", length: "100" })
  email: string;
  
  @ManyToOne(() => Address, address => address.AddId)
  @JoinColumn()
  address: Address;
  
  @Column({ type: "varchar", length: "100" })
  phone: string;
  
  @Column({ type: "varchar", length: "100" })
  website: string;
  
  @ManyToOne(() => Company, company => company.CompId)
  @JoinColumn()
  company: Company;

}