import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  @Input() opcionVentana:number=1;
  @Output() opcionVentanamenu= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.opcionVentana=1;
     this.opcionVentanamenu.emit(this.opcionVentana);
  }

  introduccion()
  {
     this.opcionVentana=1;
     this.opcionVentanamenu.emit(this.opcionVentana);
      
  }

  requerimientos()
  {
      this.opcionVentana=2;
      this.opcionVentanamenu.emit(this.opcionVentana);
      
  }

  incidentes()
  {
    this.opcionVentana=3;
    this.opcionVentanamenu.emit(this.opcionVentana);
      
  }


}
