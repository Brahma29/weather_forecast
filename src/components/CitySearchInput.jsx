import { useState } from "react";
import useFilterCities from "../hooks/useFilterCities";

export const CitySearchInput = ({ setSelectedCity }) => {
  const [city, setCity] = useState("");

  const { filteredCities, clearFilteredCities } = useFilterCities(city, 300);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const onCityClick = (item) => {
    setSelectedCity(item.id);
    clearFilteredCities();
    setCity("");
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="search your city...."
        className="outline-none py-2 px-4 rounded-full bg-black bg-opacity-50 h-12 md:w-72"
        onChange={handleChange}
        value={city}
      />

      {!!filteredCities.length && (
        <div className="suggestions h-64 bg-black absolute p-6 left-0 top-16 rounded-2xl w-72">
          <ul>
            {filteredCities.map((item) => (
              <li
                className="text-lg font-medium py-2 border-b hover:bg-gray-600 cursor-pointer"
                key={item.id}
                onClick={() => onCityClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
