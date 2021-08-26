import { ServicioTicket } from "./servicio-ticket";
import { TipoTicket } from "./TipoTicket";

export class CategoriaTicket {
    idCategoria:number;
    nombreCategoria:string;
    tipo_ticket:TipoTicket = new TipoTicket();
    serviciosTicketses:ServicioTicket[];
}
