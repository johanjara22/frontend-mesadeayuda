import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { TicketsComponent } from './components/ticket-cliente/tickets.component';

import { HomeComponent } from './components/home/home.component';



//social login
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { TicketTecnicoComponent } from './components/ticket-tecnico/ticket-tecnico.component';
import { PerfilTecnicoComponent } from './components/perfil-tecnico/perfil-tecnico.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'clientes/tickets', component: TicketsComponent },
  { path: 'perfilTecnico', component: PerfilTecnicoComponent },
  { path: 'tickets/especialista', component: TicketTecnicoComponent },
  { path: 'perfilCliente', component: PerfilClienteComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PerfilClienteComponent,
    TicketsComponent,
    HomeComponent,
    TicketTecnicoComponent,
    PerfilTecnicoComponent,

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
        autoLogin: true,
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
