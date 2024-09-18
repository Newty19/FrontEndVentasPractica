import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AgregarVentaComponent } from './components/agregar-venta/agregar-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VentasComponent,
    AgregarVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
