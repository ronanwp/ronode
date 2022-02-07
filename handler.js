'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Updated Hello World and Deployed via github!',
        input: event,
      },
      null,
      2
    ),
  };
};
