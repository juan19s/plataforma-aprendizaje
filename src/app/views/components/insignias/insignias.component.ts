import { Component } from '@angular/core';

@Component({
  selector: 'app-insignias',
  standalone: true,
  imports: [],
  templateUrl: './insignias.component.html',
  styleUrl: './insignias.component.css',
})
export class InsigniasComponent {
  insignias: { image: string; valoration: string; categorie: string }[] = [
    {
      image: 'assets/images/insignia1.png',
      valoration: '24/90',
      categorie: 'Ranking'
    },
    {
      image: 'assets/images/insignia2.png',
      valoration: '4',
      categorie: 'Cursos'
    },
    {
      image: 'assets/images/insignia3.png',
      valoration: '6/12',
      categorie: 'Actividades'
    }
  ];
}
