export class Ticket {
    idTicket: string ="";
    asunto: string ="";
    createAT: Date ;
    placaPC:string ="";
    estado ={
            "idEstado":null
    }
    descripcion: string ="";
    ubicacion: string ="";
    
    idTipoTicket : number;
    idUsario:number;
    usuario =
        {
        "id":null
    }

   
    
    
tickets:Ticket[];
}
