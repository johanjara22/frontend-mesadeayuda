import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../../services/ticket-service.service';
import {LocalService} from '../../../services/local.service';
import {UsuarioService} from '../../../services/usuario.service';
import {Ticket} from '../../../models/ticket';
import {Usuario} from '../../../models/Usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {
public ticket:Ticket= new Ticket();
public usuario:Usuario = new Usuario();

  constructor(private ticketService:TicketService,
    private router:Router,
    private localService:LocalService,
    private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    
  
     
   
      
        
       

  }

  public crear():void{
    this.ticket.usuario['id']=this.localService.getJsonValue("id_usuario");
    this.ticket.estado.idEstado=1;

    console.log("rrespuesta",this.ticket.usuario['id']+this.ticket.estado['id']);
    console.log("Enviamos",JSON.stringify(this.ticket));
    console.log("archivo"+this.ticket.archivo);
    
    
      this.ticketService.crear(this.ticket.archivo,this.ticket).subscribe
        (resp=>
           this.router.navigate(['/perfilCliente'])
        )
            
        
      }
  }


