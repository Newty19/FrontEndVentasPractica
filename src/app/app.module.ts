import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AgregarVentaComponent } from './components/agregar-venta/agregar-venta.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VentasComponent,
    AgregarVentaComponent,
    AgregarProductoComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
