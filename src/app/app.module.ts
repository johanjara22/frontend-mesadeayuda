import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { TicketsComponent } from './components/perfil-cliente/ticket-cliente/tickets.component';

import { HomeComponent } from './components/home/home.component';

import { PerfilTecnicoComponent } from './components/perfil-tecnico/perfil-tecnico.component';


//social login
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


//graficos
import { ChartsModule } from 'ng2-charts';
import { IntroduccionComponent } from './components/perfil-tecnico/introduccion/introduccion.component';
import { BarraNavegacionComponent } from './components/perfil-tecnico/barra-navegacion/barra-navegacion.component';
import { IncidentesComponent } from './components/perfil-tecnico/incidentes/incidentes.component';
import { RequerimientosComponent } from './components/perfil-tecnico/requerimientos/requerimientos.component';
import { DetallesTicketComponent } from './components/perfil-cliente/ticket-cliente/detalles-ticket/detalles-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'clientes/tickets', component: TicketsComponent },
  { path: 'perfilTecnico', component: PerfilTecnicoComponent },
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
    
    PerfilTecnicoComponent,
    IntroduccionComponent,
    BarraNavegacionComponent,
    IncidentesComponent,
    RequerimientosComponent,
    DetallesTicketComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
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
