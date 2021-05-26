import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoTicketService {

  private urlEndPonit: string = 'http://localhost:8888/estado';

  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getEstado(id_ticket: number){

    return this.http.get(`${this.urlEndPonit}/${id_ticket}`,{headers:this.httpHeader});

  }

  allEstados(){
    return this.http.get(`${this.urlEndPonit}/`,{headers:this.httpHeader});
  }


}
