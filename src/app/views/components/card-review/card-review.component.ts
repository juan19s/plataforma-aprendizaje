import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-card-review',
  standalone: true,
  imports: [ButtonModule, RatingModule, FormsModule, BadgeModule, TagModule],
  templateUrl: './card-review.component.html',
  styleUrl: './card-review.component.css',
})
export class CardReviewComponent {
  reviews: {
    id: number;
    person: string;
    position: string;
    image: string;
    starring: number;
    categorie: string;
  }[] = [
    {
      id: 1,
      person: 'Angela Aguilar',
      position: 'Senior Software Engineer',
      image: 'assets/images/angela.jfif',
      starring: 5,
      categorie: 'Diseño web',
    },
    {
      id: 2,
      person: 'Humberto Taboada',
      position: 'Freelance Software Engineer',
      image: 'assets/images/humberto.jfif',
      starring: 4,
      categorie: 'Redes',
    },
    {
      id: 3,
      person: 'Hitler Rios',
      position: '💀',
      image: 'assets/images/hitler.jpg',
      starring: 5,
      categorie: 'Fron-end',
    },
    {
      id: 4,
      person: 'Natanael Cano',
      position: 'El rey de los corridos tumbados 👑',
      image: 'assets/images/natanael.jfif',
      starring: 3,
      categorie: 'Corridos tumbados',
    },
  ];
}
