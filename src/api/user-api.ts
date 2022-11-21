import express, { Request, Response } from 'express';
import { body, ValidationChain, validationResult } from 'express-validator';
import { validateHeaderName } from 'http';
import { UserService,IFollowUserInput } from '../services/user-services';

export const userRoute = express.Router();

/**
 * To be moved 
 * 
 */
function validate(req,res) : boolean{
    let err = validationResult(req);
    if (!err.isEmpty()) {
        res.status(400).json({
            errors: err.array()
        });
        return false;
    }
    return true;
}

const createUserRequestValidation = [
    body('handle').notEmpty().withMessage('handle is mandatory'),
    body('firstName').notEmpty().withMessage('firstName is mandatory'),
    body('lastName').notEmpty().withMessage('lastName is mandatory'),
    body('email').notEmpty().isEmail().withMessage('email is mandatory'),
    body('mobile').notEmpty().withMessage('mobile is mandatory')
]
userRoute.post('/',  (req: Request, res: Response): void => {
    let createUserInput:any = {
        handle: req.body.handle,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        mobile: req.body.mobile
    }
    new UserService()
        .createUser(createUserInput)
        .then(r => res.send(r))
});

const followRequestValidation = [
    body('followee').notEmpty().withMessage('followee is mandatory'),
    body('follower').notEmpty().withMessage('follower is mandatory')
]
userRoute.post('/follow', followRequestValidation, (req: Request, res: Response): void => {
    if(validate(req,res)){
        let userService = new UserService();
        let followRequest : any = {
            followee: req.body.followee,
            follower: req.body.follower
        }
        userService
            .followUser(followRequest)
            .then(r => res.send(r))
            .catch(error => res.status(400).send(error));
    }
});