import { Component, OnInit } from '@angular/core';
import { IFilm } from '../../models/film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.scss',
})
export class FilmPageComponent implements OnInit {
  public films: IFilm[] = [];
  public film!: IFilm;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmsService: FilmsService,
  ) {}

  private _initFilm(id: number) {
    const findFilm = this.films.find(film => film.id === id);
    if (findFilm) {
      this.film = findFilm;
    } else {
      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this.films = this._filmsService.getFullFilms;

    this._initFilm(Number(id));
  }
}
