import { Component } from '@angular/core';
import { CardCourseLearningComponent } from '../card-course-learning/card-course-learning.component';
import { CategoriesCardComponent } from '../categories-card/categories-card.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CardCourseLearningComponent, CategoriesCardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
