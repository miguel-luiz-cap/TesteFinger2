import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class Company {
  //@JoinColumn({ name: "CompId", referencedColumnName: "CompId" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "100" })
  name: string;

  @Column({ type: "varchar", length: "100" })
  catchPhrase: string;
  
  @Column({ type: "varchar", length: "100" })
  bs: string;

}