import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/interfaces/Venta';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas: Venta[] = []
  constructor(private _ventasService: VentasService) { }

  ngOnInit(): void {
    this.getListVentas();
  }

  getListVentas(){
    this._ventasService.getListVentas().subscribe((data) => {
      this.ventas = data;
    })
  }

}
