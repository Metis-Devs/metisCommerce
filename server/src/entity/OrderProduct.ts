import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";

@Entity()
export class OrderProduct extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Product, (product) => product.orderproducts)
    product: Product

    @ManyToOne(() => Order, (order) => order.orders)
    order: Product
}