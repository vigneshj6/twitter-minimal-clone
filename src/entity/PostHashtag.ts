import { Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Hashtag } from "./Hashtag";
import { Post } from "./Post";

@Entity()
@Index(["postId", "hashtagId"], { unique: true })
export class PostHashtag {
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Index("index_post_hash_tag_post_id")
   @ManyToOne(type => Post)
   postId: Post;

   @Index("index_post_hash_tag_post_id")
   @ManyToOne(type => Hashtag)
   hashtagId: Hashtag;

}
