const {format} = require("date-fns");

const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("la fecha actual es: ",format(new Date(), "yyyy-MM-dd HH:mm:ss")),
  };
  return response;
};

module.exports =  handler ;