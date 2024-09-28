import { Component } from '@angular/core';
import { FILMS } from './constants/film.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  filmsData = FILMS;
}
