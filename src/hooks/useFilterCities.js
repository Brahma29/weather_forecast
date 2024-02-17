import { useState, useEffect } from "react";
import cityList from "../data/city.list.json";

const useFilterCities = (input, delay) => {
  const [filteredCities, setFilteredCities] = useState([]);

  const clearFilteredCities = () => setFilteredCities([]);

  useEffect(() => {
    if (input.length >= 3) {
      const timeoutId = setTimeout(() => {
        const filtered = cityList
          .filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
          )
          .slice(0, 4);

        setFilteredCities(filtered);
      }, delay);

      return () => clearTimeout(timeoutId);
    } else {
      setFilteredCities([]);
    }
  }, [input, delay]);

  return { filteredCities, clearFilteredCities, allCities: cityList };
};

export default useFilterCities;
