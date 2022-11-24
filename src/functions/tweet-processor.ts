import { APIGatewayProxyEvent, SQSEvent  } from 'aws-lambda';
import { AppDataSource } from './data-source';
import { User } from '../entity/user';

/**
 * 
 * from SQS to execute tweet processing
 */

export const execute = async (_event: SQSEvent): Promise<SQSEvent> => {
  console.log("****  twitter clone ****");
  await AppDataSource.initialize();
  console.log(await AppDataSource.getRepository(User).findOne({where: { id: 1}}))
  return;
};