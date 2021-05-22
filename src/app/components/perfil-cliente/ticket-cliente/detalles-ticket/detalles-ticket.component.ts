import { Component, OnInit,Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-detalles-ticket',
  templateUrl: './detalles-ticket.component.html',
  styleUrls: ['./detalles-ticket.component.css']
})
export class DetallesTicketComponent implements OnInit {
  @Input() numTicketActivo:string;
  @Input() ticketActivo:Ticket = new Ticket();
  
  
  constructor() { }

  ngOnInit(): void {

  }

}
