import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiempoRespuestaService {

  

  
  private urlEndPonit: string = 'http://localhost:8888/tiempoRespuesta';

  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }


  allTiempos(){
    return this.http.get(`${this.urlEndPonit}/all`,{headers:this.httpHeader});
  }
}
