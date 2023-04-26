import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";


@Entity()
export class order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    state:number
    
    @Column()
    address:string

    @Column()
    price:number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}