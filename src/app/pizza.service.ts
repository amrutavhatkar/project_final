import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private url= 'http://localhost:9999/api';

  constructor(private http: HttpClient) { }

  getPizzaList(): Observable<any> {
    return this.http.get(`${this.url}`+"/pizza-details");
  }

  getPizza(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

}
