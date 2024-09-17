import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/interfaces/Venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas: Venta[] = [
    { id: 1,
      cliente: 'Juan',
      folio: 'VEN-1-AC',
      fecha: "2024-01-16",
      producto: "Galletas",
      cantidad: 3
    },
    { id: 2,
      cliente: 'Juan',
      folio: 'VEN-1-AC',
      fecha: "2024-01-16",
      producto: "Soda",
      cantidad: 7
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
