import { Entity, Column, PrimaryGeneratedColumn, RelationId, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Geo } from "./geo.entity";

@Entity()
export class Address {
  //@JoinColumn({ name: "AddId", referencedColumnName: "AddId" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "100" })
  street: string;

  @Column({ type: "varchar", length: "100" })
  suite: string;
  
  @Column({ type: "varchar", length: "100" })
  city: string;
  
  @Column({ type: "varchar", length: "100" })
  zipcode: string;

  @OneToOne(() => Geo, geo => geo.id, {cascade: true})
  @JoinColumn()
  geo: Geo;

  
}