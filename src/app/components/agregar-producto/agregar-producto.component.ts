import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  form: FormGroup;
  producto: Producto[] = [];
  constructor(private fb: FormBuilder,
    private _productoService: ProductoService) {
    this.form = this.fb.group({
      clave: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    const producto: Producto = {
      clave: this.form.value.clave,
      descripcion: this.form.value.descripcion
    }
    console.log(producto);
    this._productoService.saveProducto(producto).subscribe(() => {
      console.log('Producto agregado');
    })
  }

}
