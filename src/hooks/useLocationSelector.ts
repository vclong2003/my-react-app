import { useEffect, useState } from "react";
import { ICountry, IState } from "../interfaces/location.interface";
import { getCountries, getSatesByCountryId } from "../services/api/location";

export default function useLocationSelector() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const setCountry = (countryId: number) => {
    if (!countryId) {
      setStates([]);
      console.log("clear states");
      return;
    }

    getSatesByCountryId({ countryId }).then((response) => {
      console.log(response);
      setStates(response.data);
    });
  };

  return { countries, states, setCountry };
}
