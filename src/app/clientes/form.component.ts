import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'
import { Router } from '@angular/router'
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { OauthService } from '../services/oauth.service';
import { TokenDtoService } from '../services/token-dto.service';
import { TokenDto } from '../models/token-dto';






@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = "Iniciar Sesión";

  socialUsers: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;


  constructor(private clienteService: ClienteService,
    private router: Router,
    private authService: SocialAuthService,
    private oauthService: OauthService,
    private tokenService: TokenDtoService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null && this.tokenService.getToken() != null);

      }
    );
  }



  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUsers = data;
        console.log(this.socialUsers.idToken);
        const tokenGoogle = new TokenDto(this.socialUsers.idToken);
        this.oauthService.google(tokenGoogle).subscribe(

        res => {
          this.tokenService.setToken(res.value);
          this.isLogged = true;
          this.router.navigate(['/perfilCliente']);
        },
        err=>{
          console.log(err);
          this.logOut();
          
        }
        );
      }
    ).catch
      (err => {
        console.log(err);
      })
      ;
  }



  public login(): void {
    this.clienteService.login(this.cliente).subscribe(
      response => this.router.navigate(['/perfilCliente'])

    )
  }

  logOut(): void {
    this.authService.signOut().then(
      data => {
        this.tokenService.logOut();
        this.isLogged = false;
      }
    );
  }



}

