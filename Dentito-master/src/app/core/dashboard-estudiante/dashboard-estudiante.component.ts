import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent} from '../../shared/navbar/navbar.component'

@Component({
  selector: 'app-dashboard-estudiante',
  standalone: true,
  imports: [ CommonModule,
    RouterModule, NavbarComponent],
  templateUrl: './dashboard-estudiante.component.html',
  styleUrl: './dashboard-estudiante.component.css'
})
export class DashboardEstudianteComponent {

}
