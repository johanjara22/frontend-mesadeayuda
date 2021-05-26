import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import {TicketService} from '../../../services/ticket-service.service';

@Component({
  selector: 'app-ticket-sin-categorizar',
  templateUrl: './ticket-sin-categorizar.component.html',
  styleUrls: ['./ticket-sin-categorizar.component.css']
})
export class TicketSinCategorizarComponent implements OnInit {
public ticket:Ticket= new Ticket();
public dataTickets;



  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.obTickSinCategorizar();
  }

  obTickSinCategorizar(){
    this.ticketService.ticketsSinCategorizar().subscribe((resp: Ticket) => {
      this.ticket=resp;
     
      this.dataTickets=Object.values(this.ticket=resp);
      
  });

}
}
