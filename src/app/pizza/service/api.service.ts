import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { user } from '../user'
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:8080/api/pizza-details")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
// Login api cll
  public getLogin(username: object, password: object, data: user) {
    const body = { username: username, password: password };
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<object>(`http://localhost:8080/users/login`, body, { headers })

  }
  public getSignup(username: object, email: object, password: object) {
    const body = { username: username, email: email, password: password };
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<object>(`http://localhost:8080/users`, body, { headers })

  }

}
