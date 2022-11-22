import { AppDataSource } from "src/data-source";
import { Post } from "src/entity/post";
import { User } from "src/entity/user";
import { ICreateUserOutput, UserService } from "src/services/user-services";
import AWS from 'aws-sdk'

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
sqs.sendMessage()

export interface ICreateTweetInput {
    handle: User['handle'];
    text: Post['text'];
    attachments: Post['attachments']; 
}

export interface ICreateTweetOutput {
    handle: User['handle'];
    text: Post['text'];
    attachments: Post['attachments'];
    postedOn: Post['timestamp'];
}

export class TweetService {

    userService: UserService;
    
    constructor(){
        this.userService = new UserService();
    }

    createTweet(tweetInput : ICreateTweetInput) : Promise<ICreateTweetOutput>{
        console.log(tweetInput)
        return new Promise<ICreateTweetOutput>((resolve, reject)=> {
            this.userService.getUser(tweetInput.handle)
            .then((user) => {
                let tweet = new Post();
                tweet.postBy = user;
                tweet.text = tweetInput.text;
                tweet.attachments = tweetInput.attachments;
                tweet.timestamp = new Date();
                AppDataSource.getRepository(Post).save(tweet)
                .then(post => {
                    let tweetOuput : ICreateTweetOutput = {
                        handle: post.postBy.handle,
                        postedOn: post.timestamp,
                        attachments: post.attachments,
                        text: post.text
                    }
                    
                    resolve(tweetOuput);
                }
                )
            })
        })
    }

}