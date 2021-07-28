import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import {TicketService} from '../../../services/ticket-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { v4 as uuidv4, uuidv1 } from 'uuid';
import {Router} from '@angular/router';
import { TipoTicketService } from 'src/app/services/tipo-ticket.service';

@Component({
  selector: 'app-ticket-sin-categorizar',
  templateUrl: './ticket-sin-categorizar.component.html',
  styleUrls: ['./ticket-sin-categorizar.component.css']
})
export class TicketSinCategorizarComponent implements OnInit {
public ticket:Ticket= new Ticket();
public dataTickets;



  constructor(private ticketService:TicketService,
    private tipoTicketService:TipoTicketService,
    public modal:NgbModal,
    private router:Router) { }

  ngOnInit(): void {
    this.obTickSinCategorizar();
  }

  obTickSinCategorizar(){
    this.ticketService.ticketsSinCategorizar().subscribe((resp: Ticket) => {
      this.ticket=resp;
     
      this.dataTickets=Object.values(this.ticket=resp);
      console.log("ticket"+this.dataTickets);
      
  });

}

openXL(contenido){
this.modal.open(contenido,{size:'xl'});
}


public categorizarTicket(numTicket:string,tipoTicket:string,ticket:Ticket):void{
this.ticketService.categorizarTicket(numTicket,tipoTicket,ticket).subscribe( (resp: Ticket) => {
  ticket=resp;
  ticket.idTicketCategorizado=resp.idTicketCategorizado;
  this.ticketService.ticket.tipoTicket= resp.tipoTicket;
  this.tipoTicketService.tipoTicket=this.ticketService.ticket.tipoTicket.idTipo;
  this.ticketService.ticket.idTicketCategorizado=resp.idTicketCategorizado;
  this.ticketService.ticket.idTicket= resp.idTicket;
  this.ticketService.ticket.tipoTicket.idTipo=resp.tipoTicket.idTipo;
  this.ticketService.ticket.tipoTicket.nombreTipoTicket=resp.tipoTicket.nombreTipoTicket;
  
  console.log( this.ticketService.ticket.tipoTicket.nombreTipoTicket);
  
  this.ticketService.ticket.estado
  console.log(this.ticketService.ticket.idTicketCategorizado);
  

   this.router.navigate(['/actualizarTicket']);
  
  this.modal.dismissAll();
        
  });



}
}
