import { Component, Input } from '@angular/core';
import { IFilm } from '../../models/film.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() film: IFilm = {
    id: 0,
    title: '',
    original: '',
    category: '',
    rating: 0,
    image: '',
    link: '',
  };
}
