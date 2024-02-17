import { useState, useEffect } from "react";
import axios from "axios";

const useFetchWeatherForecast = (selectedCity, isMetric = false) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_OPEN_WEATHER_MAP_BASE_URL}/forecast`,
          {
            params: {
              id: selectedCity,
              appid: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
              units: isMetric ? "metric" : "imperial",
            },
          }
        );
        setData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();

    return () => {};
  }, [selectedCity, isMetric]);

  return { loading, data, error };
};

export default useFetchWeatherForecast;
