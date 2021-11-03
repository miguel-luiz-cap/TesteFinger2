import { Entity, Column, PrimaryGeneratedColumn, RelationId, JoinColumn, ManyToOne } from 'typeorm';
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

  @ManyToOne(() => Geo, geo => geo.GeoId)
  @JoinColumn()
  geo: Geo;

  
}