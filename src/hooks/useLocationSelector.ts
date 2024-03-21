import { ChangeEvent, useEffect, useState } from "react";
import { ICountry, IState } from "../interfaces/location.interface";

export default function useLocationSelector() {
  const [countries, setRegions] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);

  useEffect(() => {
    console.log("fetch countries");
    setRegions([]);
  }, []);

  const onChangeCountryInput = (e: ChangeEvent<HTMLInputElement>) => {
    const countryId = Number(e.target.value);

    if (!countryId) {
      setStates([]);
      console.log("clear states");
      return;
    }

    console.log("fetch states based on country id");
  };

  return { countries, states, onChangeCountryInput };
}
