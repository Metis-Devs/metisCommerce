import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { User } from "./User";



@Entity()
export class Location extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    country: string

    @Column()
    province: string

    @Column()
    city: string

    @Column()
    numeration:number

    @Column()
    floorNumber: string

    @Column()
    zipCode:number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @ManyToOne(() => User, (user) => user.addresses)
    user: User

}
