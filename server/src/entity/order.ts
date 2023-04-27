import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { OrderProduct } from "./OrderProduct";


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

    @ManyToOne(() => User, (user) => user.orders)
    user: User

    @OneToMany(() => OrderProduct, (orderproducts) => orderproducts.order)
    orders: OrderProduct[]
}