import { Injectable } from '@angular/core';
import { IFilm } from '../models/film.model';
import { FILMS } from '../constants/film.constants';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private _films: IFilm[] = FILMS;
  private _searchString: string = '';

  constructor() {}

  public get getFullFilms(): IFilm[] {
    return this._films;
  }

  public get filteredFilms(): IFilm[] {
    return this._films.filter(({ title }) =>
      title.toLocaleLowerCase().includes(this._searchString.toLocaleLowerCase()),
    );
  }

  public get searchString(): string {
    return this._searchString;
  }

  public set searchString(value: string) {
    this._searchString = value;
  }
}
