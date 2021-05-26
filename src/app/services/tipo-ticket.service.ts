import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TipoTicketService {
   
  private urlEndPonit: string = 'http://localhost:8888/tipoTK';

  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getTipoTicket(id_tipo: number){

    return this.http.get(`${this.urlEndPonit}/${id_tipo}`,{headers:this.httpHeader});

  }

  allTiposTicket(){
    return this.http.get(`${this.urlEndPonit}/`,{headers:this.httpHeader});
  }

    
}