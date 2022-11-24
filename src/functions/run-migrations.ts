import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AppDataSource } from './data-source';
import { ALL } from 'dns';
import { DataSource } from 'typeorm';

export const execute = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log("****  twitter clone ****");
  await AppDataSource.initialize()
  await AppDataSource.runMigrations({transaction:'all'})
  console.log("Done")
  return { 
    statusCode:200, 
    body: JSON.stringify(
      {
        message: "function executed successfully!",
        input: _event,
      },
      null,
      2
    ),
  }     
};
