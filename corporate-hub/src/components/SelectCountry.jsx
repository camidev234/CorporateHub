import { fetchAll as getallC } from "../services/CountryService";
import { useState, useEffect } from "react";
import '../assets/styles/spinner.css';
import PropTypes from 'prop-types';


export const SelectCountry = ({ onSelectCountry }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseCountries = await getallC();
        setCountries(responseCountries);
      } catch (error) {
        console.error(error);
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    onSelectCountry(selectedCountryId);
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinnerCont w-full h-[2.3em] flex items-center">
            <div className="spinner"></div>
        </div>
      ) : (
        <select
          name="country"
          className="h-[2.3em] bg-transparent text-white focus:bg-gray-800 outline-none w-full"
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option value={country.id} key={country.id}>
              {country.country_name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

SelectCountry.propTypes = {
    onSelectCountry: PropTypes.func.isRequired
}
