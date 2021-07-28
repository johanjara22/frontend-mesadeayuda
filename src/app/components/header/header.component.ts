import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { UsuarioService } from '../../services/usuario.service';
import { GoogleLoginProvider } from 'angularx-social-login';
import { OauthService } from '../../services/oauth.service';
import { TokenDtoService } from '../../services/token-dto.service';
import { TokenDto } from '../../models/token-dto';
import { Usuario } from '../../models/Usuario';

import {LocalService} from '../../services/local.service';

import Swal from 'sweetalert2';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public usuario: Usuario = new Usuario();
  public titulo: string = 'Iniciar Sesión';
    
  socialUsers: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;
  cargo: string;




  constructor( private authService: SocialAuthService,
    private router:Router,
   
    private usuarioService: UsuarioService,
    
  
    private oauthService: OauthService,
    private tokenService: TokenDtoService,
    private localStorage: LocalService,
    ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data =>{
        this.userLogged=data;
        this.isLogged=(this.userLogged !=null && this.tokenService.getToken()!=null);
        
      }
    );
  }

  logOut():void{
      this.authService.signOut().then(
        data=>{
          this.tokenService.logOut();
          this.router.navigate(['/home']);
        }
      );
      
  }

  signInWithGoogle(): void {
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      title:'Iniciando Sesión',
      text:'Espere por favor'
    });
    Swal.showLoading();
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        this.socialUsers = data;
       

        const tokenGoogle = new TokenDto(this.socialUsers.idToken);
        this.oauthService.google(tokenGoogle).subscribe(
          (res) => {
            Swal.fire({
              icon:'success',
             title:'Usuario: '+ this.socialUsers.name,
             text:'Inicio Correcto'
           });
            this.tokenService.setToken(res.value);
           
            this.isLogged = true;

            this.usuarioService.getCliente(this.socialUsers.email).subscribe(
              (resp) => {
                this.usuario = resp;
                this.usuarioService.id_usuario=this.usuario.id;
                
                //this.usuarioService.setTId(this.usuario.id.toString());
                this.localStorage.setJsonValue("id_usuario",this.usuario.id.toLocaleString());
                this.localStorage.setJsonValue("email",this.socialUsers.email);
                
                this.usuario.nombre=this.socialUsers.name;
                
                if (this.usuario.cargo == 'Estudiante') {
                  this.router.navigate(['/perfilCliente']);
                } else if (this.usuario.cargo == 'Especialista') {
                  this.router.navigate(['/perfilTecnico']);
                }
              },
              (err) => {
                Swal.fire({
                  icon:'error',
                 title:'Datos erroneos',
                 text:'Error al Iniciar Sesión'
               });
                console.log(err);
              }
            );
          },
          (err) => {
            Swal.fire({
              icon:'error',
              title:'Datos erroneos',
                 text:'Error al Iniciar Sesión'
           });
            console.log(err);
            this.logOut();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public login(): void {
    this.usuarioService
      .login(this.usuario)
      .subscribe();

  }


}
