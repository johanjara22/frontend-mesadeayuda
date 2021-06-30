import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../../services/ticket-service.service';
import {LocalService} from '../../../services/local.service';
import {UsuarioService} from '../../../services/usuario.service';
import {Ticket} from '../../../models/ticket';
import {Usuario} from '../../../models/Usuario';
import {Router} from '@angular/router';


import Swal from 'sweetalert2';


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
 formData.append("usuario",this.ticket.usuario.id=this.localService.getJsonValue("id_usuario"));
 formData.append("descripcion",this.ticket.descripcion);
 formData.append("placaPC",this.ticket.placaPC);
 /*this.ticket.idTicketCategorizado=NULL;
 formData.append("idTicketCategorizado",this.ticket.idTicketCategorizado);*/
 formData.append("ubicacion",this.ticket.ubicacion);

 console.log("enviamos"+ JSON.stringify(formData));
 
Swal.fire({
  allowOutsideClick:false,
  icon:'info',
  title:'Crear Ticket',
  text:'Espere por favor'
});
Swal.showLoading();
 
 this.ticketService.crear(formData).subscribe((res:Ticket)=>{
   console.log("response",res);
   this.ticket=res;
   Swal.fire({
     icon:'success',
    title:'Ticket: '+ this.ticket.idTicket,
    text:'Ticket Creado'
  });
  this.router.navigate(['/perfilCliente'])
 },
 err=>{
   console.log("eror"+JSON.stringify(err));
   
  Swal.fire({
    icon:'error',
    title:'Error al crear el Ticket',
    text:err
  });
  this.router.navigate(['/perfilCliente'])
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


