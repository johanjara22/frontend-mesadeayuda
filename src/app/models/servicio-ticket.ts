import { CategoriaTicket } from "./categoria-ticket";
import { TiempoDeRespuesta } from "./tiempo-de-respuesta";

export class ServicioTicket {
    idServicio:number;
    servicio:string;
    categoriaTicket:CategoriaTicket= new CategoriaTicket();
    tiemposDeRespuestaTickets:TiempoDeRespuesta= new TiempoDeRespuesta();
    
}
