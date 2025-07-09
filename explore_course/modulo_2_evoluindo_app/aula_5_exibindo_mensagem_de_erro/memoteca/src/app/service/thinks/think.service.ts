import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IThink } from 'src/app/interface/IThink';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThinkService {
  private readonly API = "http://localhost:3000/thinks";

  constructor(private http: HttpClient) { }

  list(): Observable<IThink[]> {
    return this.http.get<IThink[]>(this.API);
  }

  create(think: IThink): Observable<IThink> {
    return this.http.post<IThink>(this.API, think);
  }

  exclude(id: number): Observable<IThink> {
    const url = `${this.API}/${id}`;
    return this.http.delete<IThink>(url);
  }

  edit(think: IThink): Observable<IThink> {
    const url = `${this.API}/${think.id}`;
    return this.http.put<IThink>(url, think);
  }

  findById(id: number): Observable<IThink> {
    const url = `${this.API}/${id}`;
    return this.http.get<IThink>(url);
  }
}
