import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from '../interfaces/IAddress';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  API: string = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) { }

  getConsultaCep(cep: string): Observable<IAddress> {
    return this.http.get<IAddress>(`${this.API}${cep}/json/`);
  }
}
