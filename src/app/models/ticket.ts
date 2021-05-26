export class Ticket {
    idTicket: string ="";
    asunto: string ="";
    createAT: Date ;
    placaPC:string ="";
    estado ={
            "id":Number,
            "nombre": String
    }
    descripcion: string ="";
    ubicacion: string ="";
    
    idTipoTicket : number;
    idUsario:number;
    usuario =
        {
        "id":Number
    }
    
    
tickets:Ticket[];
}
