import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CheckboxModule, CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: {name: string, due: string; }[] = [
    {name: 'Crear cards en figma', due: 'Mañana'},
    {name: 'CRUD en Angular', due: '10 de Septiembre'},
    {name: 'Guia de flexbox', due: '20 de Septiembre'},
  ]
  checked: boolean = false;
}
