import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPonit: string = 'http://localhost:8888/api/clientes';
  private httpHeader = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  login(cliente : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPonit,cliente,{headers:this.httpHeader});
  }
}
