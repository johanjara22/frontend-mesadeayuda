import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { HttpHeaders, HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  public ticket: Ticket = new Ticket();

  private urlEndPonit: string = 'http://localhost:8888/ticket/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }


  cantidadRequerimientos(){
    return this.http.get(`${this.urlEndPonit}requerimientosCantidad`, { headers: this.httpHeader });
  }

  requetimientosByResponsable(responsable:number)
  {
    return this.http.get(`${this.urlEndPonit}listadoRequeByResponsable/${responsable}`, { headers: this.httpHeader });

  }

  incidentesByResponsable(responsable:number)
  {
    return this.http.get(`${this.urlEndPonit}listadoInciByResponsable/${responsable}`, { headers: this.httpHeader });

  }

  cantidadIncidentes(){
    return this.http.get(`${this.urlEndPonit}incidentesCantidad`, { headers: this.httpHeader });
  }

  getTickets(id_usuario: number) {

    return this.http.get(`${this.urlEndPonit}lista/${id_usuario}`, { headers: this.httpHeader });

  }
  //    /ticket/{id_ticket}
  getTicket(id_ticket: string) {

    return this.http.get(`${this.urlEndPonit}buscar/${id_ticket}`, { headers: this.httpHeader });

  }

  ticketsSinCategorizar() {

    return this.http.get(`${this.urlEndPonit}sincategorizar/`, { headers: this.httpHeader });
  }

  allRequerimientos() {
    return this.http.get(`${this.urlEndPonit}requerimientos/`, { headers: this.httpHeader });

  }

  allIncidentes() {

    return this.http.get(`${this.urlEndPonit}incidentes/`, { headers: this.httpHeader });

  }

  /*
    crear(ticket:Ticket):Observable<Ticket>{ 
      
  
      return this.http.post<Ticket>(`${this.urlEndPonit}crear/`,ticket, {headers:this.httpHeader});
    }
  
  */



  categorizarTicket(numTicket: string, tipoTicket: string, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.urlEndPonit}categorizar/${numTicket}/${tipoTicket}`, ticket, { headers: this.httpHeader });
  }d

 editarTicket(numTicket: string,  ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.urlEndPonit}actualizar/${numTicket}`, ticket, { headers: this.httpHeader });
  }

  crear(formData: FormData) {

    return this.http.post(`${this.urlEndPonit}save/`, formData);
  } 

  downloadAdjunto(idTicket:string)
  {
    return this.http.get(`${this.urlEndPonit}downloadFile/${idTicket}`,{responseType: 'blob'});
  }
}
