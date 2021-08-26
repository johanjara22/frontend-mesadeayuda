import { Component, OnInit } from '@angular/core';
import { CategoriaTicket } from 'src/app/models/categoria-ticket';
import { TipoTicket } from 'src/app/models/TipoTicket';
import { CategoriaTiketService } from 'src/app/services/categoria-tiket.service';
import { TipoTicketService } from 'src/app/services/tipo-ticket.service';

@Component({
  selector: 'app-administrar-categorias',
  templateUrl: './administrar-categorias.component.html',
  styleUrls: ['./administrar-categorias.component.css']
})
export class AdministrarCategoriasComponent implements OnInit {
public categoriaTickets:CategoriaTicket= new CategoriaTicket();
public categoriaTicket:CategoriaTicket= new CategoriaTicket();
public tipoTicket:TipoTicket= new TipoTicket();
public dataCategorias:any;
public dataTipos:any;




  constructor(private categoriaService:CategoriaTiketService,
    private tiposTicketService:TipoTicketService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerTiposTicket();

  }

  obtenerCategorias()
  {
    this.categoriaService.getCategorias().subscribe((categorias:CategoriaTicket)=>{
      this.categoriaTickets=categorias;
      this.dataCategorias=Object.values(this.categoriaTickets);
     
      
    });
  }
  crearCategoria(categoriaTicket:CategoriaTicket){
  
    
    this.categoriaService.crearCategoria(categoriaTicket).subscribe(resp=>{
      this.obtenerCategorias();
      
    },err=>
    {
      console.log("err"+JSON.stringify(err));
      
    })
  }

  obtenerTiposTicket()
{
 this.tiposTicketService.allTiposTicket().subscribe((tipoTicket:TipoTicket)=>{
    this.tipoTicket=tipoTicket;
    this.dataTipos=Object.values(this.tipoTicket);
 },err=>{

 })
}
}
