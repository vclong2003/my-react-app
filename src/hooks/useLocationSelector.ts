import { ChangeEvent, useEffect, useState } from "react";
import { ICountry, IState } from "../interfaces/location.interface";
import { getCountries, getSatesByCountryId } from "../services/api/location";

export default function useLocationSelector() {
  const [countries, setRegions] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);

  useEffect(() => {
    getCountries().then((response) => {
      setRegions(response.data);
    });
  }, []);

  const onChangeCountryInput = (e: ChangeEvent<HTMLInputElement>) => {
    const countryId = Number(e.target.value);

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

  return { countries, states, onChangeCountryInput };
}
