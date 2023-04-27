import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Country } from "./Country";
import { Address } from "./Address";

@Entity()
export class Province extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @ManyToOne(() => Country, (country) => country.provinces)
    country: Country

    @OneToMany(() => Address, (address) => address.province)
    addresses: Address[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}
