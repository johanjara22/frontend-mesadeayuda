import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged: SocialUser;
  isLogged:boolean;



  constructor( private authService: SocialAuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data =>{
        this.userLogged=data;
        this.isLogged=(this.userLogged !=null);
        
      }
    );
  }

  logOut():void{
      this.authService.signOut().then(
        data=>{
          this.router.navigate(['/login']);
        }
      );
      
  }

}
