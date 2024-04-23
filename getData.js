const style = require("./style");

const getWeatherData = async (input) => {
  try {
    const response = await fetch(
      process.env.BASR_URL +
        "/current.json?key=" +
        `${process.env.API_KEY}&q=${input}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(style.bold(style.red(error.message)));
  }
};

const getWeatherDetails = async (input) => {
  try {
    const response = await fetch(
      process.env.BASR_URL +
        "/forecast.json?" +
        `key=${process.env.API_KEY}&q=${input}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(style.bold(style.red(error.message)));
  }
};

module.exports = {
  getWeatherData,
  getWeatherDetails,
};
