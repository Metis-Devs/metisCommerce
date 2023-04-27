import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { User } from "./User";

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
}