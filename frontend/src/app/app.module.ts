import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule, NavbarModule } from "angular-bootstrap-md";

//rutas
import {AppRoutingModule} from './app-routing.module';

//servicios

//componentes
import { AppComponent } from "./app.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EmpleadorComponent } from './components/empleador/empleador.component';


//componente validador
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, NavbarComponent, PersonaComponent, EmpleadorComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), NavbarModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
