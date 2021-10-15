import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Caja } from '../models/caja.model';
import { Factura } from '../models/factura.model';

@Injectable({
  providedIn: 'root'
})
export class VentasRepositorioService {

  constructor(private http: HttpClient) { }

  getCajasActivas():Observable<Caja[]>{
    return this.http.get<Caja[]>(`${environment.api}/cajas/active`)
  }

  addFactura(factura: Factura):Promise<boolean>{
    return this.http.post<boolean>(`${environment.api}/ventas/add`,factura).toPromise();
  }
}
