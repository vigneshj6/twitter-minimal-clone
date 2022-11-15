import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ALL } from 'dns';
import { DataSource } from 'typeorm';

export const execute = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log("****  twitter clone ****");
  new DataSource({
    type: "postgres",
    host: process.env.databaseHost,
    port: 5432,
    username: process.env.databaseUser,
    password: process.env.databasePassword,
    database: process.env.databaseName,
    synchronize: true,
    logging: false,
    entities: ["../entity/**"],
    migrations: [],
    subscribers: [],
}).runMigrations({transaction:'all'})
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "function executed successfully!",
      },
      null,
      2
    ),
  };
};
