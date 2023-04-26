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
    idNumber:number

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
    address: Address[]

    @OneToMany(() => Product, (product) => product.user)
    product: Product[]

    @OneToMany(() => Order, (order) => order.user)
    order: Order[]

    @OneToMany(() => Cart, (cart) => cart.user)
    cart: Cart[]
} 