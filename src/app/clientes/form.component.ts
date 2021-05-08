import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service'
import {Router} from '@angular/router'
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    public cliente:Cliente = new Cliente();
    public titulo: string ="Iniciar Sesión";

    socialUsers:SocialUser;
    userLogged: SocialUser;
    isLogged:boolean;

    
  constructor(private clienteService: ClienteService,
  private router:Router,
  private authService: SocialAuthService)
  
  { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data =>{
        this.userLogged=data;
        this.isLogged=(this.userLogged !=null);
        
      }
    );
  }



signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
    data =>{
      this.socialUsers= data;
      this.isLogged=true;
      this.router.navigate(['/']);
    }
  );
}



public  login():void{
  this.clienteService.login(this.cliente).subscribe(
    response =>this.router.navigate(['/perfilCliente'])
  
  )
  }
  
logOut():void{
this.authService.signOut();
}
  


}

