import { INSTANCE } from "../../const/allApi";
import { BASE_URL } from "../../const/constent";

const FETCH_WEATHER_DATA = async (userData) => {
  const response = await INSTANCE.post(`${BASE_URL}/api/weather-api`, userData);
  return response.data;
};
// const fETCH_WEATHER_DATA = async (userData) => {
//   const response = await INSTANCE.post(`${BASE_URL}/api/weather-api`, userData);
//   return response.data;
// };

const weatherService = {
  FETCH_WEATHER_DATA,
};

export default weatherService;
