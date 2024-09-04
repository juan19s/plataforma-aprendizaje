import { Component } from '@angular/core';
import { InsigniasComponent } from '../insignias/insignias.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  imports: [InsigniasComponent, DividerModule],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.css'
})
export class ProfileSidebarComponent {

}
