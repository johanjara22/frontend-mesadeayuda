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
import {TicketService} from'./services/ticket-service.service';

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
import { TicketSinCategorizarComponent } from './components/perfil-tecnico/ticket-sin-categorizar/ticket-sin-categorizar.component';
import { CrearTicketComponent } from './components/perfil-cliente/crear-ticket/crear-ticket.component';
import { ActualizarTicketComponent } from './components/perfil-tecnico/actualizar-ticket/actualizar-ticket.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';
import { AdministrarServiciosComponent } from './components/perfil-admin/administrar-servicios/administrar-servicios.component';
import { AdministrarCategoriasComponent } from './components/perfil-admin/administrar-categorias/administrar-categorias.component';
import { AdministrarEspecialistasComponent } from './components/perfil-admin/administrar-especialistas/administrar-especialistas.component';
import { AdministrarTiemposRespuestaComponent } from './components/perfil-admin/administrar-tiempos-respuesta/administrar-tiempos-respuesta.component';
import { BarraNavegacionAdminComponent } from './components/perfil-admin/barra-navegacion-admin/barra-navegacion-admin.component';
import { ReportesComponent } from './components/perfil-admin/reportes/reportes.component';
import { DataComponent } from './components/perfil-admin/data/data.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'clientes/tickets', component: TicketsComponent },
  { path: 'perfilTecnico', component: PerfilTecnicoComponent },
  { path: 'crearTicket', component: CrearTicketComponent },
  {path:'actualizarTicket', component:ActualizarTicketComponent},
  { path: 'perfilCliente', component: PerfilClienteComponent },
  { path: 'perfilAdmin', component: PerfilAdminComponent },
  { path: 'adminServicios', component: AdministrarServiciosComponent },
  { path: 'adminCategorias', component: AdministrarCategoriasComponent },
  { path: 'adminEspecialistas', component: AdministrarEspecialistasComponent },
  { path: 'adminTiempos', component: AdministrarTiemposRespuestaComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PerfilClienteComponent,
    TicketsComponent,
    HomeComponent,
    CrearTicketComponent,
    PerfilTecnicoComponent,
    IntroduccionComponent,
    BarraNavegacionComponent,
    IncidentesComponent,
    RequerimientosComponent,
    DetallesTicketComponent,
    TicketSinCategorizarComponent,
    ActualizarTicketComponent,
    PerfilAdminComponent,
    AdministrarServiciosComponent,
    AdministrarCategoriasComponent,
    AdministrarEspecialistasComponent,
    AdministrarTiemposRespuestaComponent,
    BarraNavegacionAdminComponent,
    ReportesComponent,
    DataComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    SocialLoginModule,
    RouterModule.forRoot(routes),
    NgbModule

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
