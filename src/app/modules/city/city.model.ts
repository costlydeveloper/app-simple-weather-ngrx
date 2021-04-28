export interface ICity {
	id: number | null;
	name: string | null;
}

export interface ICoordinates {
	lat: number | null;
	lon: number | null;
}

export class City implements ICity {
	id: number | null       = null;
	name: string | null     = null;
}

export class Coordinates implements ICoordinates {
	lat: number | null = null;
	lon: number | null = null;
}
