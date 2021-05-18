import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const cabecera={headers: new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPonit: string = 'http://localhost:8888/oauth/';

  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});
  

  constructor(private http: HttpClient) { }

  login(usuario : Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPonit,usuario,{headers:this.httpHeader});
  }

  getCliente(email: string):Observable<Usuario>{
   
    return this.http.get<Usuario>(`${this.urlEndPonit}cliente/${email}`,{headers:this.httpHeader});

      
  }
}