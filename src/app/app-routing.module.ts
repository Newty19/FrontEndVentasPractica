import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './components/ventas/ventas.component';
import { AgregarVentaComponent } from './components/agregar-venta/agregar-venta.component';

const routes: Routes = [
  { path: '', component: VentasComponent },
  { path: 'agregarVenta', component: AgregarVentaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
