import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { LocalService } from 'src/app/services/local.service';
import { TicketService } from 'src/app/services/ticket-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.css']
})
export class RequerimientosComponent implements OnInit {
  public datarequerimientosByEsp:any;
  public ticket:Ticket;

  constructor(private ticketService:TicketService,
    private localService:LocalService,
    private router:Router) { }

  ngOnInit(): void {
    this.requerimientos();
  }
  

  requerimientos(){
    this.ticketService.requetimientosByResponsable(this.localService.getJsonValue("id_usuario")).subscribe((requerimiento:Ticket)=>{
        this.ticket=requerimiento;
        this.datarequerimientosByEsp= Object.values(this.ticket);
        console.log("data"+JSON.stringify(this.datarequerimientosByEsp));
        
    },err=>{
          console.log("err"+err);
          
    })
  }


  editarTicket(ticket:Ticket){
    this.ticketService.ticket=ticket;
        this.router.navigate(['/actualizarTicket']);
   
  }
}
