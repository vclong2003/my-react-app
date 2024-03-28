import {
  IGetCountriesResponse,
  IGetStatesPayload,
} from "@interfaces/location.interface";
import { axiosInstance } from "@libs/axios";

export const getCountries = async (): Promise<IGetCountriesResponse> => {
  return await axiosInstance.get("/location");
};

export const getSatesByCountryId = async (payload: IGetStatesPayload) => {
  const { countryId } = payload;
  return await axiosInstance.get(`/location?pid=${countryId}`);
};
