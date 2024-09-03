import { Component } from '@angular/core';
import { CardCourseLearningComponent } from '../card-course-learning/card-course-learning.component';
import { CategoriesCardComponent } from '../categories-card/categories-card.component';
import { ButtonModule } from 'primeng/button';
import { CardReviewComponent } from '../card-review/card-review.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CardCourseLearningComponent,
    CategoriesCardComponent,
    ButtonModule,
    CardReviewComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {}
