export interface IFavorites {
  cityIDs: number[];
}

export class Favorites implements IFavorites {
  cityIDs: number[] = [];
}
