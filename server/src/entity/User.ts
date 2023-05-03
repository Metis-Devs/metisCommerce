import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity,  OneToMany, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { Location } from "./Location";
import { Product } from "./Product";
import { Order } from "./Order";
import { Cart } from "./Cart";
import { Comment } from "./Comment";

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

    @Column({unique: true})
    email:string

    @Column({default: 0})
    role:number

    @Column()
    password:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @OneToMany(() => Location, (location) => location.user)
    addresses: Location[]

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]

    @OneToMany(() => Product, (product) => product.user)
    products: Product[]

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]

    @OneToOne(() => Cart, (cart) => cart.user, {eager: true})
    @JoinColumn()
    cart: Cart

    @ManyToMany(() => Product)
    @JoinTable()
    favoritesItem: Product[]
} 