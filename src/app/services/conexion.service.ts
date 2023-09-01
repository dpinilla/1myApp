import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  url = "http://127.0.0.1:80"

  constructor(private http:HttpClient) { }

  consultaDatos():Observable<any>{
    return this.http
    .get(this.url+"/consultaDatos")
  }

  removeDatos(datId:any){
    return this.http
    .post(this.url+"/removeDatos", JSON.stringify(datId))
  }
}
