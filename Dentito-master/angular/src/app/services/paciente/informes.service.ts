import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class InformesService {
  API_URL: string = 'http://localhost:3001/pacientes';

  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe((res) => res);
  }
}
