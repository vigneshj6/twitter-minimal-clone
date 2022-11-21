import { APIGatewayProxyEvent, SQSEvent  } from 'aws-lambda';
import { ALL } from 'dns';
import { DataSource } from 'typeorm';

/**
 * 
 * from SQS to execute tweet processing
 */

export const execute = async (_event: SQSEvent): Promise<SQSEvent> => {
  console.log("****  twitter clone ****");
  return;
};
