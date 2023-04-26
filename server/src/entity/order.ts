import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { User } from "./User";


@Entity()
export class Order extends BaseEntity {
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

    @ManyToOne(() => User, (user) => user.order)
    user: User
}