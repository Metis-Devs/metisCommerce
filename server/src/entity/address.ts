import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";


@Entity()
export class address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    address:number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}