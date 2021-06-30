import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaTiketService {

 

  private urlEndPonit: string = 'http://localhost:8888/categoria';

  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getCategorias(){

    return this.http.get(`${this.urlEndPonit}/`,{headers:this.httpHeader});

  }



}
