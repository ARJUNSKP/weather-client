import { useState } from "react";
import { useDispatch } from "react-redux";
import { fETCH_WEATHER } from "../store/weather/weatherSlice";
import weatherService from "../store/weather/weatherService";

const WeatherHome = () => {
  const [searchData, setSearch] = useState("");
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const fetchSearchData = async () => {
    dispatch(fETCH_WEATHER({ placeName: searchData }));
    const dataSet = await weatherService.fETCH_WEATHER_DATA({
      placeName: searchData,
    });
    setData(dataSet.data);
    setSearch("");
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  console.log(data);

  return (
    <div className="flex flex-col gap-2 px-5 py-8 w-[100%] h-[100vh] bg-[url('https://img.freepik.com/premium-vector/sky-clouds-design-with-flat-cartoon-poster-flyers-postcards-web-banners_771576-58.jpg')] bg-center bg-cover filter bg-no-repeat">
      <div className="w-full h-10 flex gap-2">
        <input
          placeholder="search place"
          className="w-[80%]"
          value={searchData}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="w-[20%] h-10 bg-yellow-600"
          onClick={() => {
            fetchSearchData();
          }}
        >
          Search
        </button>
      </div>
      {data && (
        <div className="flex flex-col md:flex-row">
          <div className="bg-custom-yellow w-[100%] h-[20rem] rounded-[15px] flex flex-col justify-center items-center md:w-[50%]">
            <strong className="text-yellow-700">Today</strong>
            <strong className="text-yellow-700">
              <img
                src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
                alt="..."
              />
            </strong>
            <strong className="text-yellow-700">
              {data?.main?.temp - 273.15}°C
            </strong>
            <strong className="text-yellow-700">{data?.weather[0].main}</strong>
            <strong className="text-yellow-700">
              {formatDate(new Date())}
            </strong>
          </div>
          <div className="w-[100%] flex flex-col px-4 gap-2 md:w-[50%]">
            <div className="bg-white/5 rounded-lg h-[35%] w-[75%]  shadow-lg backdrop-blur-sm border border-white/30"></div>
            <strong className="mt-4">Random Text</strong>
            <p>
              jjjjjjj kkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkk k kkkkkkkkkkkkkk
              kkkkkkkkkkkkk kkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkk
              kkkkkkkkkkkkkkkkkkk kkkkkkkkkkkk
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherHome;
