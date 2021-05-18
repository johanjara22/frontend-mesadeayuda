import { Component, OnInit , Input} from '@angular/core';
import{TicketService} from'../../services/ticket-service.service';
import {Ticket} from '../../models/ticket'
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {



 public ticket:Ticket= new Ticket();

 

  constructor(
    private ticketService:TicketService,
    public usuarioService: UsuarioService

  ) { }

  ngOnInit(): void {
    this.ticketService.getTickets(this.usuarioService.id_usuario)
    .subscribe( (resp: Ticket) => {
        
     
      this.ticket=resp;
      console.log("prueba"+ JSON.stringify(this.ticket));
  
      });
     
  }

obtenerTicketsPorCliente():void
{


}

}
