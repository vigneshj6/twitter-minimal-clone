import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Hashtag {
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   tag: string; 

   @Column({ type: 'timestamptz' })
   created_at: Date;

   @Column({ type: 'timestamptz' })
   updated_at: Date;

}
