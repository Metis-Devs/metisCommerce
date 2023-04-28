import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity,  OneToMany } from "typeorm";
import { Address } from "./Address";
import { Product } from "./Product";
import { Order } from "./Order";
import { Cart } from "./Cart";

@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstname:string

    @Column()
    lastname:string

    @Column()
    idNumber:string

    @Column()
    email:string

    @Column()
    role:boolean

    @Column()
    password:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @OneToMany(() => Address, (address) => address.user)
    addresses: Address[]

    @OneToMany(() => Product, (product) => product.user)
    products: Product[]

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]

    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[]
} 