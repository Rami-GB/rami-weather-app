const axios = require("axios");

const apiKey =
  "pk.eyJ1IjoicmFtaWdiMDEiLCJhIjoiY2tvNzl0bm41MmFrbTJycGc5MGUwbGdmbiJ9.LVz1wpvzO2-H_h5Lol1dCA";
const geocode = async (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${apiKey}&limit=1`;

  let place = "";

  try {
    let { data } = await axios(url);
    place = data;
    if (place.features.length === 0) {
      throw new Error("Unable to find location. Try another search.");
    }
    return {
      latitude: place.features[0].center[1],
      longitude: place.features[0].center[0],
      location: place.features[0].place_name,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to location services!");
  }
  //   request({ url, json: true }, (error, { body }) => {
  //     if (error) {
  //       callback("Unable to connect to location services!", undefined);
  //     } else if (body.features.length === 0) {
  //       callback("Unable to find location. Try another search.", undefined);
  //     } else {
  //       callback(undefined, {
  //         latitude: body.features[0].center[1],
  //         longitude: body.features[0].center[0],
  //         location: body.features[0].place_name,
  //       });
  //     }
  //   });
};

module.exports = geocode;
