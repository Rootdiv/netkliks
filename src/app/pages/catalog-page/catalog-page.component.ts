import { Component } from '@angular/core';
import { IFilm } from '../../models/film.model';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss',
})
export class CatalogPageComponent {
  constructor(private _filmsService: FilmsService) {}

  public get films(): IFilm[] {
    return this._filmsService.filteredFilms;
  }
}
