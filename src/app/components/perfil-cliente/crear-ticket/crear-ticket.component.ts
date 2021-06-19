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

  uploadedFiles:Array <File>= new Array;
public ticket:Ticket= new Ticket();
public usuario:Usuario = new Usuario();

  constructor(private ticketService:TicketService,
    private router:Router,
    private localService:LocalService,
    private usuarioService:UsuarioService,
) { }

  ngOnInit(): void {
    
    

  }

onUpload(){
  console.log('upload');
  let formData = new FormData();
  console.log("archivos",this.uploadedFiles);
  
  /*for (let i= 0;  i< 2 ; i++) { 
     formData.append("uploads[]",this.uploadedFiles[i],this.uploadedFiles[i].name);
*/
    
      formData.append('file', this.uploadedFiles[0],this.uploadedFiles[0].name);
   

 formData.append("asunto",this.ticket.asunto);
 formData.append("descripcion",this.ticket.descripcion);
 formData.append("placaPc",this.ticket.placaPC);
 formData.append("ubicacion",this.ticket.ubicacion);
 
 this.ticketService.crear(formData).subscribe((res)=>{
   console.log("response",res);
   
 })
}

  onFileChange(e)
  {
    console.log('FileChange',e);
    this.uploadedFiles = e.target.files;
    
  }

/*
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
  }*/
}


