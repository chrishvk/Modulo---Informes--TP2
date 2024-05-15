import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  // loginObj: Login;
  // constructor(private http: HttpClient) {
  //   this.loginObj = new Login();
  // }
  // onLogin() {
  //   // debugger;
  //   this.http.post('http://', this.loginObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert('Login completo');
  //       navigateByUrl('/dashboard-estudiante');
  //     } else {
  //       alert(res.message);
  //     }
  //   });
  // }
}

export class Login {
  EmailId: string;
  Password: string;
  constructor() {
    this.EmailId = '';
    this.Password = '';
  }
}
