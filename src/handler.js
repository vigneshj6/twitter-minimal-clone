"use strict";

module.exports.hello = async (event) => {
  console.log("****  twitter clone ****");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
