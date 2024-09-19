import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/interfaces/Venta';
import { VentasService } from 'src/app/services/ventas.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas: Venta[] = []
  sum: number = 0;
  sumClient: number = 0;
  sumProduct: number = 0;
  sumProductByClient: number = 0;
  folio: string = "";
  constructor(private _ventasService: VentasService) { }

  ngOnInit(): void {
    this.getListVentas();
  }

  getListVentas() {
    let sum: number = 0;

    this._ventasService.getListVentas().subscribe((data) => {
      this.ventas = data;
      //Total ventas
      this.ventas.forEach(function (item) {
        sum += item.cantidad;
      })
      this.sum = sum;
    })
  }

  calcularProductoCliente() {
    let sumClient: number = 0;
    let nameClient = document.getElementById("prodClient") as HTMLInputElement;
    //Total por cliente vendido
    this.ventas.forEach(function (item) {
      if (item.cliente == nameClient.value) {
        sumClient += item.cantidad;
      }
    })
    this.sumClient = sumClient;
  }

  calcularProductoTotal() {
    let sumProduct: number = 0;
    let nameProduct = document.getElementById("prodTotal") as HTMLInputElement;
    //Total por producto vendido
    this.ventas.forEach(function (item) {
      if (item.producto == nameProduct.value) {
        sumProduct += item.cantidad;
      }
    })
    this.sumProduct = sumProduct;

  }
  calcularProductoPorCliente(){
    let sumProductByClient: number = 0;
    let nameClient = document.getElementById("clientForProduct") as HTMLInputElement;
    let nameProduct = document.getElementById("prodByClient") as HTMLInputElement;

          //Total por producto vendido por cliente
          this.ventas.forEach(function (item) {
            if (item.producto == nameProduct.value && item.cliente == nameClient.value) {
              sumProductByClient += item.cantidad;
            }
          })
          this.sumProductByClient = sumProductByClient;
  }

  convertirFolio(){
    let inputFolio = document.getElementById("folio") as HTMLInputElement;
    let folioArray = inputFolio.value.split("-");
    folioArray[1] = String(parseInt(folioArray[1])+10);
    this.folio = folioArray.join("-");
    console.log(this.folio);
  }



  fileName = "DetallesPorProducto.xlsx";

  exportexcel() {

    let data = document.getElementById("table-data");

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);

  }

}
