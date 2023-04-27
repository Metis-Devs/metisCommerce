import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { User } from "./User";
import { Province } from "./Province";


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

    @ManyToOne(() => User, (user) => user.addresses)
    user: User

    @ManyToOne(() => Province, (province) => province.addresses)
    province: Province

}
