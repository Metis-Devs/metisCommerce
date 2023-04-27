import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity()
export class CartProduct extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Product, (product) => product.cartProducts)
    product: Product
}