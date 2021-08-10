import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ServicioTicket} from 'src/app/models/servicio-ticket';

@Injectable({
  providedIn: 'root'
})
export class ServicioTiketService {

  private urlEndPonit: string = 'http://localhost:8888/servicioTicket';

  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getServicios():Observable<ServicioTicket>{

    return this.http.get<ServicioTicket>(`${this.urlEndPonit}/`,{headers:this.httpHeader});

  }

  getServiciosByTipoTicket(tipoTicket:number):Observable<ServicioTicket>{

    return this.http.get<ServicioTicket>(`${this.urlEndPonit}/all/${tipoTicket}`,{headers:this.httpHeader});

  }

  crearServicio(servicio:ServicioTicket){
    return this.http.post(`${this.urlEndPonit}/crear`,servicio,{headers:this.httpHeader});
  }
}
