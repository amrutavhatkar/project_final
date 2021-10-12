import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slot } from '../slot';

const baseUrl = 'http://localhost:3000/myapp';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(private http:HttpClient) { }

  // public sendDetails(data:any){
  //   return this.http.post<any>("",data);
  // }

  getAll(): Observable<any> {
    const GET_ALL = baseUrl+'/all';
    return this.http.get(GET_ALL);

  }

  add(slot:Slot):Observable<any>{
    const ADD = baseUrl+'/add';
    const body = JSON.stringify(slot);
    const headers = { 'content-type': 'application/json'}
    return this.http.post(ADD,body,{headers});
  }



  


}
