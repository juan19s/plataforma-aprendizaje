import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-course-learning',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card-course-learning.component.html',
  styleUrl: './card-course-learning.component.css',
})
export class CardCourseLearningComponent {
  cards: { id: number; title: string; description: string; image: string }[] = [
    {
      id: 1,
      title: 'Learn Angular',
      description: 'Learn Angular with this course',
      image: 'assets/images/card_prog.png',
    },
    {
      id: 2,
      title: 'Master React',
      description: 'Become proficient in React with our comprehensive course',
      image: 'assets/images/card_react.png',
    },
    {
      id: 3,
      title: 'Explore Vue.js',
      description: 'Dive into Vue.js and build amazing applications',
      image: 'assets/images/card_vuejs.jpeg',
    },
  ];
}
