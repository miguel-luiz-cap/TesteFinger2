import { Entity, Column, PrimaryGeneratedColumn, RelationId, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Address {
  //@JoinColumn({ name: "AddId", referencedColumnName: "AddId" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "100" })
  street: string;

  @Column({ type: "varchar", length: "100" })
  city: string;
  
  @Column({ type: "varchar", length: "100" })
  state: string;
  
  @Column({ type: "varchar", length: "100" })
  zipcode: string;
  
}