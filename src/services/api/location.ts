import {
  IGetCountriesResponse,
  IGetStatesPayload,
} from "@interfaces/location.interface";
import { axiosInstance } from "@libs/axios";

const getCountries = async (): Promise<IGetCountriesResponse> => {
  return await axiosInstance.get("/location");
};

const getSatesByCountryId = async (payload: IGetStatesPayload) => {
  const { countryId } = payload;
  return await axiosInstance.get(`/location?pid=${countryId}`);
};

export default { getCountries, getSatesByCountryId };
