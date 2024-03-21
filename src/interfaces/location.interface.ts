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

export interface IGetCountryResponse {
  message: string;
  error: boolean;
  code: number;
  data: ICountry[];
}

export interface IGetStatePayload {
  countryId: number;
}

export interface IGetStateResponse {
  message: string;
  error: boolean;
  code: number;
  data: IState[];
}
