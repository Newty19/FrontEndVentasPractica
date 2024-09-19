import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/Cliente';
import { tipoCliente } from '../interfaces/tipoCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl: string;
  private myApiUrl: string;
  private myApiUrlTipoCliente: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/cliente/';
    this.myApiUrlTipoCliente = 'api/tipoCliente';
    
   }

   getListTipoCliente(): Observable<tipoCliente[]> {
     return this.http.get<tipoCliente[]>(`${this.myAppUrl}${this.myApiUrlTipoCliente}`);
   }

   saveCliente(cliente: Cliente): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, cliente);
   }
}