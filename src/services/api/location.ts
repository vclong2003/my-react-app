import {
  IGetCountriesResponse,
  IGetStatesPayload,
  IGetStatesResponse,
} from "../../interfaces/location.interface";
import { axiosInstance } from "../../libs/axios";

export const getCountries = async (): Promise<IGetCountriesResponse> => {
  const response = await axiosInstance.get("/location");
  return response.data as IGetCountriesResponse;
};

export const getSatesByCountryId = async (payload: IGetStatesPayload) => {
  const { countryId } = payload;
  const response = await axiosInstance.get(`/location?pid=${countryId}`);
  return response.data as IGetStatesResponse;
};
