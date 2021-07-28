import { ServicioTicket } from "./servicio-ticket";
import { TipoTicket } from "./TipoTicket";

export class CategoriaTicket {
    idCategoria:number;
    nombreCategoria:string;
    tipoTicke:TipoTicket = new TipoTicket();
    servicios:ServicioTicket[];
}
