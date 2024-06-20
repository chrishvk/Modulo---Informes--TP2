import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { Router } from '@angular/router';
import InformesService from '../../../services/paciente/informes.service';
import { InformesInterface } from '../../../interfaces/informes.interface';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './informes.component.html',
  styles: ``,
})
export default class InformesComponent implements OnInit {
  pacientes: any[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private informesService: InformesService
  ) {}

  ngOnInit(): void {
    this.informesService.getClients().subscribe(
      (data) => {
        this.pacientes = data;
        this.isLoading = false;
        console.log(data)
      },
      (error) => {
        console.error('Error al obtener pacientes:', error);
        this.isLoading = false;
      }
    );
  }

  onEyeClick() {
    this.router.navigate(['/dashboard-estudiante/view']);
    console.log('Redireccionado EyeClick');
  }
}
