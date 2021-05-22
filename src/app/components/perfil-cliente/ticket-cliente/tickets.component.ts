import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import{TicketService} from'../../../services/ticket-service.service';
import {Ticket} from '../../../models/ticket'
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Observable } from 'rxjs';
import { LocalService } from '../../../services/local.service';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

public numTicketActivo:string;


 public ticket:Ticket= new Ticket();

 

  constructor(
    private ticketService:TicketService,
    public usuarioService: UsuarioService,
    private localService: LocalService

  ) { }

  ngOnInit(): void {
    this.ticketService.getTickets(parseInt(this.localService.getJsonValue("id_usuario")))
    .subscribe( (resp: Ticket) => {
        
      this.numTicketActivo= this.ticket.idTicket;
      this.ticket=resp;
      console.log("prueba"+ JSON.stringify(this.ticket));
  
      });
     
  }

  detallesCaso()
  {
    this.ticketService.getTickets(this.usuarioService.id_usuario)
    .subscribe( (resp: Ticket) => {
      this.ticket=resp;
      this.numTicketActivo= this.ticket.idTicket;
      
      this.ticket=resp;
      console.log("prueba"+ JSON.stringify(this.ticket));
  
      });
    
  }


}
