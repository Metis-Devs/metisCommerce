import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity,  OneToMany } from "typeorm";
import { Location } from "./Location";
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

    @OneToMany(() => Location, (location) => location.user)
    addresses: Location[]

    @OneToMany(() => Product, (product) => product.user)
    products: Product[]

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]

    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[]
} 