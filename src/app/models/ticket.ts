import { Estado } from "./Estado";
import { TipoTicket } from "./TipoTicket";
import { Usuario } from "./Usuario";
import {CategoriaTicket} from './categoria-ticket';

export class Ticket {
    idTicket: string = "";
    idTicketCategorizado: string = "";
    asunto: string = "";
    createAT: Date;
    placaPC: string = "";
    estado: Estado = new Estado();
    tipoTicket: TipoTicket = new TipoTicket();
    descripcion: string = "";
    ubicacion: string = "";
    idUsario: number;
    usuario: Usuario = new Usuario();
    responsable: Usuario = new Usuario();
    categoria:CategoriaTicket= new CategoriaTicket();
    tickets: Ticket[];


    /*
        TipoTicket ={
            "idTipo":null
        }*/

    /*estado ={
            "idEstado":null
    }*/

    /* usuario =
          {
          "id":null
      }
  */
   
}
