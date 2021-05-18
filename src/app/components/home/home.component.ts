import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import {TokenDtoService} from '../../services/token-dto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userLogged: SocialUser;
  isLogged:boolean;

  constructor(private authService: SocialAuthService,
    private tokenservice:TokenDtoService ) { }

  ngOnInit(): void {
    
    this.authService.authState.subscribe(
      data =>{
        this.userLogged=data;
        this.isLogged=(this.userLogged !=null && this.tokenservice.getToken() !=null);
        
      }
    );
  }

}
