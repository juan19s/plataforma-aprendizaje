import { Component } from '@angular/core';
import { CardCourseLearningComponent } from '../card-course-learning/card-course-learning.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CardCourseLearningComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
