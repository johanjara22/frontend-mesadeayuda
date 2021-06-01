import { TipoTicket } from "./TipoTicket";

export class CategoriaTicket {
    idCategoria:number;
    nombreCategoria;
    tipoTicke:TipoTicket = new TipoTicket();
}
