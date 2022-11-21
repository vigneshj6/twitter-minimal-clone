import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { TweetService } from '../services/tweet-services';

export const tweetRoute = express.Router();

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
    body('text').notEmpty().withMessage('text is mandatory for tweet'),
    body('attachments').isArray().withMessage('attachments should be array')
]
tweetRoute.post('/',  (req: Request, res: Response): void => {
    let createTweet:any = {
        handle: req.body.handle,
        text: req.body.text,
        attachments: req.body.attachments
    }
    new TweetService()
        .createTweet(createTweet)
        .then(r => res.send(r))
});