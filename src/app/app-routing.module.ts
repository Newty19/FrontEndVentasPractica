import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './components/ventas/ventas.component';
import { AgregarVentaComponent } from './components/agregar-venta/agregar-venta.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';

const routes: Routes = [
  { path: '', component: VentasComponent },
  { path: 'agregarVenta', component: AgregarVentaComponent },
  { path: 'agregarProducto', component: AgregarProductoComponent},
  { path: 'agregarCliente', component: AgregarClienteComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
