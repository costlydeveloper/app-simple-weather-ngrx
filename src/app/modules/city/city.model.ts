export interface ICity {
  id: number;
  name: string;
  favorite?: boolean;
}

export interface ICoordinates {
  lat: number;
  lon: number;
}

export class City implements ICity {
  id: number = null;
  name: string = null;
  favorite: boolean = false;
}

export class Coordinates implements ICoordinates {
  lat: number = null;
  lon: number = null;
}
