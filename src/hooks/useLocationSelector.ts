import { useEffect, useState } from "react";

import { ICountry, IState } from "../interfaces/location.interface";

import locationService from "../services/api/location";

export default function useLocationSelector() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);

  useEffect(() => {
    locationService.getCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const setCountry = (countryId: number) => {
    if (!countryId) {
      setStates([]);
      return;
    }

    locationService.getSatesByCountryId({ countryId }).then((response) => {
      setStates(response.data);
    });
  };

  return { countries, states, setCountry };
}
