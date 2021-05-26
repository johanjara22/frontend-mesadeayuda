import { Injectable } from '@angular/core';
import {Ticket} from '../models/ticket';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService{

  private urlEndPonit: string = 'http://localhost:8888/ticket/';

  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getTickets(id_usuario: number){
   
    return this.http.get(`${this.urlEndPonit}lista/${id_usuario}`,{headers:this.httpHeader});
 
  }
  //    /ticket/{id_ticket}
  getTicket(id_ticket:string){

    return this.http.get(`${this.urlEndPonit}buscar/${id_ticket}`,{headers:this.httpHeader});

  }

  ticketsSinCategorizar(){
    return this.http.get(`${this.urlEndPonit}sincategorizar/`,{headers:this.httpHeader});
  }

  allRequerimientos(){
    return this.http.get(`${this.urlEndPonit}requerimientos/`,{headers:this.httpHeader});

  }

  allIncidentes(){
    return this.http.get(`${this.urlEndPonit}incidentes/`,{headers:this.httpHeader});

  }


  crear(ticket:Ticket):Observable<Ticket>{ 
    return this.http.post<Ticket>(`${this.urlEndPonit}crear`,ticket,{headers:this.httpHeader});
  }


 
}
