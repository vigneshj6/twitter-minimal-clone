import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { FileType } from "./enum/file-type";
import { Post } from "./post";

@Entity()
export class Attachment {
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   url: string; 
   
   @Column({
    type: 'enum',
    enum: FileType,
    default: FileType.IMAGE
    })
   fileType: number; 

   @Column({ type: 'timestamptz' })
   timestamp: Date;

   @ManyToOne(type => Post, post => post.attachments)
   post: Post;

}
