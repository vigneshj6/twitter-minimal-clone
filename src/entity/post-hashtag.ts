import { Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Hashtag } from "./hashtag";
import { Post } from "./post";

@Entity()
@Index(["postId", "hashtagId"], { unique: true })
export class PostHashtag {
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Index("index_post_hash_tag_post_id")
   @ManyToOne(type => Post)
   postId: Post;

   @Index("index_post_hash_tag_hash_tag")
   @ManyToOne(type => Hashtag)
   hashtagId: Hashtag;

}
