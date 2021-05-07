import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import {FormsModule}  from '@angular/forms'
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { TicketsComponent } from './perfil-cliente/tickets/tickets.component'

const routes : Routes=[
  {path: '',redirectTo:'./', pathMatch: 'full'},
  {path: 'clientes/form', component: FormComponent},
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
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FooterComponent,
    HeaderComponent,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
