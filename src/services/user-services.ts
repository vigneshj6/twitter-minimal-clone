import { AppDataSource } from "src/data-source";
import { Follower } from "src/entity/follower";
import { User } from "src/entity/user";

export interface ICreateUserInput {
    handle: User['handle'];
    email: User['email'];
    firstName: User['firstName'];
    lastName: User['lastName'];
    mobile: User['mobile'];
}


export interface ICreateUserOutput extends ICreateUserInput{
    id: User['id']
}

export interface IGetUser {
    handle : User['handle']
}

export interface IListUserOutput extends ICreateUserOutput{

}

export interface IFollowUserInput {
    followee : User['handle'];
    follower : User['handle'];
}

export class UserService {
    async createUser(userInput : ICreateUserInput) : Promise<ICreateUserOutput>{
        console.log(userInput)
        let user = new User();
        user.handle = userInput.handle;
        user.firstName = userInput.firstName;
        user.lastName = userInput.lastName;
        user.mobile = userInput.mobile;
        user.email = userInput.email;
        user.age = 18;
        let result = await AppDataSource.getRepository(User).save(user);
        return result;
    }

    async getUser(handleInput : string) : Promise<User>{
        return await AppDataSource.getRepository(User).findOneBy( { handle: handleInput } );
    }

    async followUser(followUser : IFollowUserInput) : Promise<Follower> {
        return new Promise<Follower>((resolve, reject) => {
            if(followUser.followee === followUser.follower){
                reject('Cannot follow same user')
            }
            let userRepository = AppDataSource.getRepository(User);
            let followeeUserPromise = userRepository.findOne( { where: { handle: followUser.followee } } );
            let followerUserPromise = userRepository.findOne( { where: { handle: followUser.follower } } );
            Promise.all([followeeUserPromise, followerUserPromise])
            .then(([followeeUser, followerUser]) => {
                let follower = new Follower();
                follower.followee = followeeUser;
                follower.follower = followerUser;
                let followExists = AppDataSource.getRepository(Follower).findOneBy( { followee: followeeUser, follower: followerUser } )
                followExists.then((isFollowExists) => {
                    if(isFollowExists != null){
                        console.log(isFollowExists);
                        reject('Already following');
                    }
                    else{
                        resolve(AppDataSource.getRepository(Follower).save(follower));
                    }
                })
                .catch(err => reject(err))
            })
        })
    }

}
