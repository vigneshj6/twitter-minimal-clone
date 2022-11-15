import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log("****  twitter clone ****");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "function executed successfully!",
        input: _event,
      },
      null,
      2
    ),
  };
};
