import { useState } from "react";
import "./App.css";
import WeatherChart from "./components/Chart";
import Loader from "./components/Loader";

//backgrounds
import sunnyDay from "./assets/backgrounds/sunnyday.jpg";
import snowyDay from "./assets/backgrounds/snowyday.jpg";
import windyDay from "./assets/backgrounds/windyday.jpg";
import hazyDay from "./assets/backgrounds/hazyday.jpg";
import cloudyDay from "./assets/backgrounds/cloudyday.jpg";
import rainyDay from "./assets/backgrounds/rainyday.jpg";
import { CitySearchInput } from "./components/CitySearchInput";
import useFetchWeatherForecast from "./services/queries/useFetchWeatherForecast";
import useFetchCurrentWeather from "./services/queries/useFetchCurrentWeather";
import { ErrorScreen } from "./components/ErrorScreen";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isMetric, setIsMetric] = useState(false);

  const {
    loading: forecastLoading,
    data: forecastData,
    error: forecastError,
  } = useFetchWeatherForecast(selectedCity ?? "3163858", isMetric);

  const {
    loading: currentWeatherLoading,
    data: currentWeatherData,
    error: currentWeatherError,
  } = useFetchCurrentWeather(selectedCity ?? "3163858", isMetric);

  const backgroundImages = {
    cloud: cloudyDay,
    rain: rainyDay,
    snow: snowyDay,
    clear: sunnyDay,
    wind: windyDay,
    haze: hazyDay,
  };

  const weatherType = (description) => {
    for (const [keyword, image] of Object.entries(backgroundImages)) {
      if (description.includes(keyword)) {
        return image;
      }
    }
    return sunnyDay;
  };

  const temperatureFormatter = (temp) => {
    return (
      <>
        {temp.toPrecision(2)}&deg;{isMetric ? "C" : "F"}
      </>
    );
  };

  if (
    forecastLoading ||
    currentWeatherLoading ||
    !currentWeatherData ||
    !forecastData
  )
    return <Loader />;

  if (forecastError || currentWeatherError)
    return <ErrorScreen msg={forecastError || currentWeatherError} />;

  return (
    <main
      className="bg-no-repeat bg-cover h-screen"
      style={{
        backgroundImage: `url(${weatherType(
          currentWeatherData.weather[0].description
        )})`,
      }}
    >
      <div className="backdrop-brightness-50 h-full text-white">
        <div className="container mx-auto md:p-8 px-4 py-6">
          <nav className="flex justify-between">
            <div className="relative">
              <CitySearchInput setSelectedCity={setSelectedCity} />
            </div>

            <button
              className="h-12 w-12 rounded-full bg-black bg-opacity-50 border-2 hover:shadow-2xl hover:shadow-white border-white text-white"
              onClick={() => setIsMetric(!isMetric)}
            >
              &deg;{isMetric ? "C" : "F"}
            </button>
          </nav>

          <section>
            <div className="wrapper my-14 flex lg:flex-row flex-col gap-8 justify-between">
              <div className="flex gap-4 md:flex-row flex-col md:text-left text-center md:justify-start justify-center">
                <div>
                  <p className="text-8xl font-bold">
                    {temperatureFormatter(currentWeatherData.main.temp)}
                  </p>

                  <p className="text-xl font-medium">
                    {temperatureFormatter(currentWeatherData.main.temp_min)} |{" "}
                    {temperatureFormatter(currentWeatherData.main.temp_max)}
                  </p>
                </div>

                <div className="text-xl leading-normal">
                  <p>
                    <span className="font-semibold">Humidity: </span>
                    {currentWeatherData.main.humidity}
                  </p>

                  <p>
                    <span className="font-semibold">Pressure: </span>
                    {currentWeatherData.main.pressure} hPa
                  </p>

                  <p>
                    <span className="font-semibold">Wind: </span>
                    {currentWeatherData.wind.speed} {isMetric ? "Km/hr" : "m/s"}
                  </p>
                </div>
              </div>

              <div className="lg:text-right text-center">
                <strong className="md:text-6xl text-4xl">
                  {currentWeatherData.name}
                </strong>

                <p className="md:text-4xl text-2xl my-2">
                  {new Date().toDateString()}
                </p>

                <p className="md:text-3xl text-xl font-medium">
                  {currentWeatherData.weather[0].description}
                </p>
              </div>
            </div>
          </section>

          <WeatherChart weatherData={forecastData.list} />
        </div>
      </div>
    </main>
  );
}

export default App;
