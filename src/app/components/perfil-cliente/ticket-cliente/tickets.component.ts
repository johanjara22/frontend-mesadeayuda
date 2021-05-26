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

files:FileList;

public numTicketActivo:Ticket= new Ticket();
public listadoTickets: Array<Object>;
public dataTickets;

 public ticket:Ticket= new Ticket();

 

  constructor(
    private ticketService:TicketService,
    public usuarioService: UsuarioService,
    private localService: LocalService

  ) { }

  ngOnInit(): void {
    this.obtenerTickets();
     
  }

  detallesCaso(id_ticket:string)
  {
    this.ticketService.getTicket(id_ticket)
    .subscribe( (resp: Ticket) => {
      this.numTicketActivo=resp;
      console.log(JSON.stringify(this.numTicketActivo));
      
            
      });
    
  }
  obtenerTickets()
  {
this.ticketService.getTickets(parseInt(this.localService.getJsonValue("id_usuario")))
    .subscribe( (resp: Ticket) => {
        
    
      this.ticket=resp;
      Array.of(JSON.stringify(this.ticket));
      this.dataTickets=Object.values(this.ticket=resp);
      console.log("prueba"+ JSON.stringify(this.dataTickets));
  
      });
  }


}
