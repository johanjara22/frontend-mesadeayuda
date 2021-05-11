import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import {FormsModule}  from '@angular/forms'
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { TicketsComponent } from './ticket-cliente/tickets.component';

import { HomeComponent } from './home/home.component';



//social login
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

const routes : Routes=[
  {path: '',redirectTo:'/home', pathMatch: 'full'},
  {path: 'login', component: FormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'clientes/tickets', component: TicketsComponent},
  {path: 'perfilCliente', component: PerfilClienteComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ClientesComponent,
    FormComponent,
    PerfilClienteComponent,
    TicketsComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     FormsModule,
    SocialLoginModule,
    RouterModule.forRoot(routes)

  ],
 
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '933118792446-tkaho95f4005vrst4jkisbdgspjjkg05.apps.googleusercontent.com'
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
