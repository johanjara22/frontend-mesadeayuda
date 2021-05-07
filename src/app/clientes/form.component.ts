import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service'
import {Router} from '@angular/router'




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    public cliente:Cliente = new Cliente();
    public titulo: string ="Iniciar Sesión";
    
  constructor(private clienteService: ClienteService,
  private router:Router) { }

  ngOnInit(): void {
  }


public  login():void{
this.clienteService.login(this.cliente).subscribe(
  response =>this.router.navigate(['/perfilCliente'])
)

  console.log("clicked");
  console.log(this.cliente);
}
}
