import { Router } from 'express';
import { tweetRoute } from './api/tweet-api';
import { userRoute } from './api/user-api';

export const routes = Router();

routes.use("/users",userRoute);
routes.use("/tweets",tweetRoute);