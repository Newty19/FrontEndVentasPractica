import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Venta } from 'src/app/interfaces/Venta';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _ventasService: VentasService) {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      folio: ['', Validators.required],
      fecha: ['', Validators.required],
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarVenta() {
    const venta: Venta = {
      cliente: this.form.value.cliente,
      folio: this.form.value.folio,
      fecha: this.form.value.fecha,
      producto: this.form.value.producto,
      cantidad: this.form.value.cantidad
    }
    this._ventasService.saveVentas(venta).subscribe(() => {
      console.log('Venta agregada');
    })
  }

}
