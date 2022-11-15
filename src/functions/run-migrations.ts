import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const execute = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log("****  twitter clone ****");
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
