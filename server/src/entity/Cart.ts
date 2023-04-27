import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { CartProduct } from "./CartProduct";

@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    totalPrice: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, (user) => user.carts)
    user: User

    @OneToMany(() => CartProduct, (cartproduct) => cartproduct.cart)
    carts: CartProduct[]
}