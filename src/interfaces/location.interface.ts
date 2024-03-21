export interface ICountry {
  id: number;
  pid: number | null;
  name: string;
  createdAt: string;
}

export interface IState {
  id: number;
  pid: number;
  name: string;
  createdAt: string;
}

export interface IGetCountriesResponse {
  message: string;
  error: boolean;
  code: number;
  data: ICountry[];
}

export interface IGetStatesPayload {
  countryId: number;
}

export interface IGetStatesResponse {
  message: string;
  error: boolean;
  code: number;
  data: IState[];
}
