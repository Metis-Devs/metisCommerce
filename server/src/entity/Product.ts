import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";
import { ProductType } from "./ProductType";

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

    @ManyToOne(() => User, (user) => user.addresses)
    user: User

    @ManyToMany(() => ProductType)
    @JoinTable()
    type: ProductType[]
}

