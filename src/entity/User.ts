import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Index("index_user_handle", {unique: true})
    handle: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    email: string

    @Column()
    mobile: string

}
