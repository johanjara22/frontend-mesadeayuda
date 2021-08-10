import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { Estado } from 'src/app/models/Estado';
import { Usuario } from 'src/app/models/Usuario';
import { TipoTicket } from 'src/app/models/TipoTicket';
import { CategoriaTicket } from 'src/app/models/categoria-ticket';

import { EstadoTicketService } from 'src/app/services/estado-ticket.service';

import { CategoriaTiketService } from 'src/app/services/categoria-tiket.service';
import { TipoTicketService } from 'src/app/services/tipo-ticket.service';
import { ServicioTiketService } from 'src/app/services/servicio-tiket.service';

import { TicketService } from 'src/app/services/ticket-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ServicioTicket } from 'src/app/models/servicio-ticket';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actualizar-ticket',
  templateUrl: './actualizar-ticket.component.html',
  styleUrls: ['./actualizar-ticket.component.css']
})
export class ActualizarTicketComponent implements OnInit {

  constructor( private router:Router,
  private estadoTicketService: EstadoTicketService,
  private tipoTicketService: TipoTicketService,
  public ticketService: TicketService,
  private usuarioService: UsuarioService,
  private categoriaService: CategoriaTiketService,
  private servicioTicketService:ServicioTiketService
  ) { }

  public dataEstados;
  public dataTipoTicket;
  public dataEspecialistas;
  public dataDetallesTicket;
  public dataCategorias;
  public dataServicios;

  public ticket: Ticket = new Ticket();
  public estado: Estado = new Estado();
  public usuario: Usuario = new Usuario();
  public tipoTicket: TipoTicket = new TipoTicket();
  public categoriaTicket: CategoriaTicket = new CategoriaTicket();
  public servicioTicket: ServicioTicket = new ServicioTicket();



  ngOnInit(): void {
    this.obtenerEstados();
    this.obtenerTiposTickets();
    this.obtenerDetallesTicket();
    this.obtenerEspecialsitas();
    this.obtenerCategorias();
    this.obtenerServicios();



    console.log("id" + JSON.stringify(this.ticketService.ticket.idTicketCategorizado));


  }

  obtenerEstados() {
    this.estadoTicketService.allEstados().subscribe((resp: Estado) => {
      this.estado = resp;
      this.dataEstados = Object.values(this.estado);



    });
  }

  obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe((resp: CategoriaTicket) => {
      this.categoriaTicket = resp;
      this.dataCategorias = Object.values(this.categoriaTicket);



    });
  }

  obtenerEspecialsitas() {
    this.usuarioService.getEspecialistas().subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.dataEspecialistas = Object.values(this.usuario);
    });
  }

  obtenerTiposTickets() {
    this.tipoTicketService.allTiposTicket().subscribe((resp: TipoTicket) => {
      this.tipoTicket = resp;
      this.dataTipoTicket = Object.values(this.tipoTicket);



    });
  }

  obtenerServicios(){
    this.servicioTicketService.getServiciosByTipoTicket(this.tipoTicketService.tipoTicket).subscribe((resp:ServicioTicket)=>{
      this.servicioTicket=resp;
      this.dataServicios= Object.values(this.servicioTicket);
     // console.log("services"+JSON.stringify(this.dataServicios));
      
    });
  }

   
  

  obtenerDetallesTicket() {
    this.ticketService.getTicket(this.ticketService.ticket.idTicket).subscribe((resp: Ticket) => {

      console.log("ticket por id"+JSON.stringify(resp));
      

      this.ticket = resp;
      this.ticket.estado = resp.estado;
      this.ticket.usuario = resp.usuario;
      this.ticket.archivo=resp.archivo;
     this.ticket.idTicket= resp.idTicket;
      this.ticket.tipoTicket = resp.tipoTicket;
      this.dataDetallesTicket = Object.values(this.ticket);

    }
    )

    
  }
  

  editarTicket(){
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      title:'Editanto Ticket',
      text:'Espere por favor'
    });
    Swal.showLoading();
    this.ticketService.editarTicket(this.ticket.idTicket,this.ticket).subscribe((ticket:Ticket)=>{
      this.ticket= ticket;
      Swal.fire({
        icon:'success',
       title:'Ticket: '+ this.ticket.idTicketCategorizado,
       text:'Ticket Actualizado'
     });
     this.router.navigate(['/perfilTecnico']); 
      
    }),err=>{
      Swal.fire({
        icon:'error',
       title:'Ticket: '+ this.ticket.idTicketCategorizado,
       text:'Error al actualizar'
     });
        
    };
  }
 
  downloadFile(ticket:Ticket)
  {
   
    this.ticketService.downloadAdjunto(ticket.idTicket).subscribe(resp=>{
      console.log("");
      
      const fileName = ticket.archivo;
      //console.log("resp"+resp);`archivo_${Math.random()}.`+resp.type;
      this.manageDownloadFile(resp,fileName);
      

   
    })

  }

  manageDownloadFile(response:any,filename:string):void{
    
 const dataType= response.type;
 const binaryData=[];
 binaryData.push(response);

 const filePath= window.URL.createObjectURL(new Blob(binaryData,{type:dataType}));
 const downloadLink= document.createElement('a');
 downloadLink.href= filePath;

 downloadLink.setAttribute('download',filename);
 document.body.appendChild(downloadLink);
 downloadLink.click();
}
}