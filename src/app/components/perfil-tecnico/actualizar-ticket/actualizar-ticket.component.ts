import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { Estado } from 'src/app/models/Estado';
import { Usuario } from 'src/app/models/Usuario';
import { TipoTicket } from 'src/app/models/TipoTicket';

import {EstadoTicketService} from 'src/app/services/estado-ticket.service';


import {TipoTicketService} from 'src/app/services/tipo-ticket.service';


import { TicketService } from 'src/app/services/ticket-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-actualizar-ticket',
  templateUrl: './actualizar-ticket.component.html',
  styleUrls: ['./actualizar-ticket.component.css']
})
export class ActualizarTicketComponent implements OnInit {

  constructor(private estadoTicketService:EstadoTicketService,
    private tipoTicketService:TipoTicketService,
    public ticketService: TicketService,
    public usuarioService: UsuarioService ) { }
  public dataEstados;
  public dataTipoTicket;
  public dataEspecialistas;
   public dataDetallesTicket;

 public ticket:Ticket= new Ticket();
 public estado:Estado= new Estado();
 public usuario:Usuario= new Usuario();
 public tipoTicket:TipoTicket= new TipoTicket();



  ngOnInit(): void {
    this.obtenerEstados();
    this.obtenerTiposTickets();
   this.obtenerDetallesTicket();
   this.obtenerEspecialsitas();

  
    
    console.log("id"+JSON.stringify(this.ticketService.ticket.idTicketCategorizado));
    
    
  }

  obtenerEstados(){
    this.estadoTicketService.allEstados().subscribe( (resp: Estado) => {
      this.estado=resp;
      this.dataEstados=Object.values(this.estado);
    
      
            
      });
  }

  obtenerEspecialsitas(){
    this.usuarioService.getEspecialistas().subscribe((resp:Usuario) =>{
        this.usuario= resp;
        this.dataEspecialistas=Object.values(this.usuario);
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
