import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./User";
import { ProductType } from "./ProductType";
import { OrderProduct } from "./OrderProduct";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    description: string

    @Column()
    image: string

    @Column()
    stock: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, (user) => user.address)
    user: User

    @OneToMany(() => OrderProduct, (orderproducts) => orderproducts.product)
    orderproducts: OrderProduct[]

    @ManyToMany(() => ProductType)
    @JoinTable()
    type: ProductType[]
}

