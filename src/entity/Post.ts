import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Attachment } from "./Attachment";

@Entity()
export class Post {
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   text: string; 
   
   @Column() 
   post_by: number; 

   @Column({ type: 'timestamptz' })
   timestamp: Date;

   @OneToMany(type => Attachment, attachment => attachment.post)
   attachments: Attachment[];

}
