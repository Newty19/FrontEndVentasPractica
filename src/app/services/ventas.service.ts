import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venta } from '../interfaces/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/ventas/'
   }

   getListVentas(): Observable<Venta[]> {
     return this.http.get<Venta[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }

   saveVentas(venta: Venta): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, venta);
   }
}
