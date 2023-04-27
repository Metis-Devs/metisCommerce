import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Province } from "./Province";

@Entity()
export class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    address:number

    @OneToMany(() => Province, (province) => province.country)
    provinces: Province[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}
