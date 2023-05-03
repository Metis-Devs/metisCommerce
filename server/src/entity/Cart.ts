import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne } from "typeorm";
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

    @OneToOne(() => User, (user) => user.cart)
    user: User

    @OneToMany(() => CartProduct, (cartproduct) => cartproduct.cart)
    cartProducts: CartProduct[]
}