import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { LocalService } from 'src/app/services/local.service';
import { TicketService } from 'src/app/services/ticket-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-incidentes',
  templateUrl: './incidentes.component.html',
  styleUrls: ['./incidentes.component.css']
})
export class IncidentesComponent implements OnInit {

  public dataIncidentesByEsp:any;
  public ticket:Ticket;

  constructor(private ticketService:TicketService,
    private localService:LocalService,
    private router:Router) { }

  ngOnInit(): void {
    this.incidentes();
  }
  

  incidentes(){
    this.ticketService.incidentesByResponsable(this.localService.getJsonValue("id_usuario")).subscribe((incidente:Ticket)=>{
        this.ticket=incidente;
        this.dataIncidentesByEsp= Object.values(this.ticket);
        console.log("data"+JSON.stringify(this.dataIncidentesByEsp));
        
    },err=>{
          console.log("err"+err);
          
    })
  }


  editarTicket(ticket:Ticket){
    this.ticketService.ticket=ticket;
        this.router.navigate(['/actualizarTicket']);
   
  }
}
