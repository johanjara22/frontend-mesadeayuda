import { Component, OnInit } from '@angular/core';
import { CategoriaTicket } from 'src/app/models/categoria-ticket';
import { ServicioTicket } from 'src/app/models/servicio-ticket';
import { TiempoDeRespuesta } from 'src/app/models/tiempo-de-respuesta';
import { CategoriaTiketService } from 'src/app/services/categoria-tiket.service';
import { ServicioTiketService } from 'src/app/services/servicio-tiket.service';
import { TiempoRespuestaService } from 'src/app/services/tiempo-respuesta.service';

@Component({
  selector: 'app-administrar-servicios',
  templateUrl: './administrar-servicios.component.html',
  styleUrls: ['./administrar-servicios.component.css']
})
export class AdministrarServiciosComponent implements OnInit {
  public servicios:ServicioTicket=new ServicioTicket();
  public servicioTicket:ServicioTicket=new ServicioTicket();
  public dataServicios:any;
  public dataCategorias:any;
  public dataTiempos:any;
  public categoriaTicket: CategoriaTicket = new CategoriaTicket();
  public tiemposRespuesta:TiempoDeRespuesta= new TiempoDeRespuesta();

  constructor(private servicioService:ServicioTiketService,
    private categoriaService: CategoriaTiketService,
    private tiemposService:TiempoRespuestaService ) { }

  ngOnInit(): void {
    this.obtenerServicios();
    this.obtenerCategorias();
    this.obtenerTiempos();
  }

  obtenerServicios(){
        this.servicioService.getServicios().subscribe((servicios:ServicioTicket)=>{
          this.servicios=servicios;
          this.dataServicios=Object.values(this.servicios);
         
          
        })
  }

  obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe((categorias: CategoriaTicket) => {
      this.categoriaTicket = categorias;
      this.dataCategorias = Object.values(this.categoriaTicket);



    });
  }


  obtenerTiempos() {
    this.tiemposService.allTiempos().subscribe((tiempos: TiempoDeRespuesta) => {
      this.tiemposRespuesta = tiempos;
      this.dataTiempos = Object.values(this.tiemposRespuesta);
     
      
    });
  }

  crearServicio(servicio:ServicioTicket){
    console.log("enviamos servicio"+JSON.stringify(servicio));
    this.servicioService.crearServicio(servicio).subscribe(resp=>{
      console.log("resp"+resp);
      this.obtenerServicios();
    })
  }
}
