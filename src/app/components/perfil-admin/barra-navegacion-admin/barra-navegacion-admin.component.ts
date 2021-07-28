import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion-admin',
  templateUrl: './barra-navegacion-admin.component.html',
  styleUrls: ['./barra-navegacion-admin.component.css']
})
export class BarraNavegacionAdminComponent implements OnInit {
  @Input() opcionVentana:number=1;
  @Output() opcionVentanamenu= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  sinCategorizar(){
    alert("si funciona");
  }

 servicios()
 {
  this.opcionVentana=1;
  this.opcionVentanamenu.emit(this.opcionVentana);
 }

 categorias(){
  this.opcionVentana=2;
  this.opcionVentanamenu.emit(this.opcionVentana);
 }

 especialistas(){
  this.opcionVentana=3;
  this.opcionVentanamenu.emit(this.opcionVentana);
 }
 respuesta(){
  this.opcionVentana=4;
  this.opcionVentanamenu.emit(this.opcionVentana);
 }
 reportes(){
  this.opcionVentana=5;
  this.opcionVentanamenu.emit(this.opcionVentana);
 }
 data(){
  this.opcionVentana=6;
  this.opcionVentanamenu.emit(this.opcionVentana);
 }
}
