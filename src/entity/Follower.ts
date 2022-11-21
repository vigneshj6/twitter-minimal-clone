import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm"
import { User } from "./user";

@Entity()
@Index(["followee", "follower"], { unique: true })
export class Follower {

    @PrimaryGeneratedColumn()
    id: number

    @Index("index_follower_followee")
    @ManyToOne(type => User)
    followee: User;

    @ManyToOne(type => User)
    follower: User;

}
