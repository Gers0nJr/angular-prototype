import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // tslint:disable-next-line:no-inferrable-types
  private apiPath: string = 'http://localhost:8080/clientes';

  constructor(private  http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiPath);
  }
}
