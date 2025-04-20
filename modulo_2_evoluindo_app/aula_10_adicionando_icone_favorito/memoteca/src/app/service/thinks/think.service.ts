import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IThink } from 'src/app/interface/IThink';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThinkService {
  private readonly API = "http://localhost:3000/thinks";

  constructor(private http: HttpClient) { }

  listByPage(page: number, filter: string): Observable<IThink[]> {
    const itensPerPage: number = 4;

    let params = new HttpParams()
    .set("_page", page)
    .set('_limit', itensPerPage)

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.http.get<IThink[]>(this.API, {
      params // O mesmo que params: params
    });
  }

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
