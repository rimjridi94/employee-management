import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // ✅ Ajouté
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  // ✅ Ajouté
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-management';
}