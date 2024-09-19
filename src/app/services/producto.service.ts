import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/';
   }

  //  getProductoDetalleList(): Observable<Producto[]> {
  //    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}`);
  //  }

   saveProducto(producto: Producto): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, producto);
   }
}
