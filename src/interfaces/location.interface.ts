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
