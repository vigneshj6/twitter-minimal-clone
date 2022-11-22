import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Attachment } from "src/entity/attachment";
import { User } from "src/entity/user";

@Entity()
export class Post {
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   text: string; 
   
   @ManyToOne(type => User)
   postBy: User; 

   @Column({ type: 'timestamptz' })
   timestamp: Date;

   @OneToMany(type => Attachment, attachment => attachment.post)
   attachments: Attachment[];

}
