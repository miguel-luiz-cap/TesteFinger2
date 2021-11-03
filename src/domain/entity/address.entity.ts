import { Entity, Column, PrimaryGeneratedColumn, RelationId, JoinColumn } from 'typeorm';
import { Geo } from "./geo.entity";

@Entity()
export class Address {
  @JoinColumn({ name: "AddId", referencedColumnName: "AddId" })
  @PrimaryGeneratedColumn("increment")
  AddId: number;

  @Column({ type: "varchar", length: "100" })
  street: string;

  @Column({ type: "varchar", length: "100" })
  suite: string;
  
  @Column({ type: "varchar", length: "100" })
  city: string;
  
  @Column({ type: "varchar", length: "100" })
  zipcode: string;
  
  @RelationId((geo: Geo) => geo.GeoId)
  geo: number;

  
}