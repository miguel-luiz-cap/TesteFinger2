import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class Contact {
  //@JoinColumn({ name: "CompId", referencedColumnName: "CompId" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "100" })
  type: string;

  @Column({ type: "varchar", length: "100" })
  contact: string;
}