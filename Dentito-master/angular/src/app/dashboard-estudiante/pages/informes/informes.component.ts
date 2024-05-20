import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './informes.component.html',
  styles: ``,
})
export default class InformesComponent {
  constructor(private router: Router) {}
  onEyeClick() {
    this.router.navigate(['/dashboard-estudiante/view']);
    console.log('Redireccionado EyeClick');
  }
}
