const axios = require("axios");

const forecast = async (latitude, longitude) => {
  const url = `https://api.darksky.net/forecast/421874e487085cf568368e6787a8c910/${latitude},${longitude}?units=si`;

  let weather;
  try {
    let { data } = await axios.get(url);
    weather = data;
    if (weather.error) {
      throw new Error("Unable to find location. Try another search.");
    }
    return (
      weather.daily.data[0].summary +
      " It is currently " +
      weather.currently.temperature +
      " degress out. There is a " +
      weather.currently.precipProbability +
      "% chance of rain."
    );
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to weather service!");
  }
};

module.exports = forecast;
