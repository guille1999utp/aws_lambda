const dateFns = require("date-fns");

export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("la fecha actual es: ",dateFns.format(new Date(), "yyyy-MM-dd HH:mm:ss")),
  };
  return response;
};
