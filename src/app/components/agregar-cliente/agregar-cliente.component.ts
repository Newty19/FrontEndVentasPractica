import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/Cliente';
import { tipoCliente } from 'src/app/interfaces/tipoCliente';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  form: FormGroup;
  producto: Cliente[] = [];
  tipoCliente: tipoCliente[] = [];
  tipoClienteId: number = 1;
  constructor(private fb: FormBuilder,
    private _clienteService: ClienteService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoCliente: ['', Validators.required],
      fecha: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getListTipoCliente();
  }


  getListTipoCliente() {
    this._clienteService.getListTipoCliente().subscribe((data) => {
      this.tipoCliente = data;
    })
  }

  agregarCliente() {
    let inputTipoCliente = document.getElementById("tipoCliente") as HTMLInputElement;
    let tipoClienteId: number = 0;
    this.tipoCliente.forEach(function (item) {
      if (item.descripcion == inputTipoCliente.value) {
        tipoClienteId = item.id;
      }
    })
    this.tipoClienteId = tipoClienteId;

    const cliente: Cliente = {
      nombre: this.form.value.nombre,
      direccion: this.form.value.direccion,
      tipoCliente: tipoClienteId,
      fecha: this.form.value.fecha
    }
    console.log(cliente);
    this._clienteService.saveCliente(cliente).subscribe(() => {
      console.log('Cliente agregado');
    })
  }
}
