import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { Cart } from "./Cart";
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

    @ManyToOne(() => Cart, (cart) => cart.carts)
    cart: Cart
    @ManyToOne(() => Product, (product) => product.cartProducts)
    product: Product
}