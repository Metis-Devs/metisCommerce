import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { User } from "./User";


@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    address:number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @ManyToOne(() => User, (user) => user.address)
    user: User

}