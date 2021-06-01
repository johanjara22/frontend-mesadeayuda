import { CategoriaTicket } from "./categoria-ticket";
import { TiempoDeRespuesta } from "./tiempo-de-respuesta";

export class ServicioTicket {
    idServicio:number;
    nombreServicio:string;
    categoriaTicket:CategoriaTicket= new CategoriaTicket();
    tiempoDeRespuesta:TiempoDeRespuesta= new TiempoDeRespuesta();
    
}
