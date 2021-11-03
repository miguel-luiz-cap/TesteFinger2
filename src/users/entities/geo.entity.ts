import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class Geo {
  @JoinColumn({ name: "GeoId", referencedColumnName: "GeoId" })
  @PrimaryGeneratedColumn("increment")
  GeoId: number;

  @Column({ type: "varchar", length: "100" })
  lat: string;

  @Column({ type: "varchar", length: "100" })
  lng: string;
}