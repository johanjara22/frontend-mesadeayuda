import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { Estado } from 'src/app/models/Estado';
import { TipoTicket } from 'src/app/models/TipoTicket';

import {EstadoTicketService} from '../../../services/estado-ticket.service';


import {TipoTicketService} from '../../../services/tipo-ticket.service';


import { TicketService } from 'src/app/services/ticket-service.service';


@Component({
  selector: 'app-actualizar-ticket',
  templateUrl: './actualizar-ticket.component.html',
  styleUrls: ['./actualizar-ticket.component.css']
})
export class ActualizarTicketComponent implements OnInit {

  constructor(private estadoTicketService:EstadoTicketService,
    private tipoTicketService:TipoTicketService,
    public ticketService: TicketService) { }
  public dataEstados;
  public dataTipoTicket;
   public dataDetallesTicket;

 public ticket:Ticket= new Ticket();
 public estado:Estado= new Estado();
 public tipoTicket:TipoTicket= new TipoTicket();



  ngOnInit(): void {
    this.obtenerEstados();
    this.obtenerTiposTickets();
   this.obtenerDetallesTicket();

  
    
    console.log("id"+JSON.stringify(this.ticketService.ticket.idTicketCategorizado));
    
    
  }

  obtenerEstados(){
    this.estadoTicketService.allEstados().subscribe( (resp: Estado) => {
      this.estado=resp;
      this.dataEstados=Object.values(this.estado);
    
      
            
      });
  }

  obtenerTiposTickets(){
    this.tipoTicketService.allTiposTicket().subscribe( (resp: TipoTicket) => {
      this.tipoTicket=resp;
      this.dataTipoTicket=Object.values(this.tipoTicket);
     
      
            
      });
  }

  obtenerDetallesTicket()
  {
    this.ticketService.getTicket(this.ticketService.ticket.idTicket).subscribe((resp: Ticket)=>
    {
        this.ticket=resp;
        this.ticket.estado=resp.estado;
        this.ticket.usuario= resp.usuario;
        this.ticket.tipoTicket=resp.tipoTicket;
        this.dataDetallesTicket=Object.values(this.ticket);
       
    }
    )
    
    
  }

}
