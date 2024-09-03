import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-card',
  standalone: true,
  imports: [],
  templateUrl: './categories-card.component.html',
  styleUrl: './categories-card.component.css',
})
export class CategoriesCardComponent {
  cards: { id: number; title: string; image: string }[] = [
    {
      id: 1,
      title: 'Diseño Gráfico',
      image: 'assets/images/diseño_grafico.jfif',
    },
    {
      id: 2,
      title: 'Programación',
      image: 'assets/images/card_programacion.png',
    },
    {
      id: 3,
      title: 'Marketing',
      image: 'assets/images/card_marketing.jpeg',
    },
    {
      id: 4,
      title: 'Desarrollo Web',
      image: 'assets/images/card_desarrollo_web.jpeg',
    },
    {
      id: 5,
      title: 'Idiomas',
      image: 'assets/images/card_idiomas.jpeg',
    },
  ];
}
