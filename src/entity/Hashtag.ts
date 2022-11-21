import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm"

@Entity()
export class Hashtag {
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   tag: string; 

   @Column({ type: 'timestamptz' })
   createdAt: Date;

   @Column({ type: 'timestamptz' })
   updatedAt: Date;

}
