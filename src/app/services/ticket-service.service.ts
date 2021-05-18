import { Injectable } from '@angular/core';
import {Ticket} from '../models/ticket';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService{

  private urlEndPonit2: string = 'http://localhost:8888/ticket/';

  private httpHeader2 = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getTickets(id: number){
   
    return this.http.get(`${this.urlEndPonit2}lista/${id}`,{headers:this.httpHeader2});

      
  }
}
