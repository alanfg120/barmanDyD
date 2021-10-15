import { Injectable } from '@angular/core';
import { VentasRepositorioService } from '../data/ventas-repositorio.service';
import { Factura } from '../models/factura.model';
import { VentasStore } from './ventas.store';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  constructor(
    private store: VentasStore,
    private repositorio: VentasRepositorioService
  ) {}

  getCaja() {
    this.repositorio.getCajasActivas().subscribe((cajas) => {
      this.store.update({ caja: cajas[0], loading: false });
    });
  }

  async addVenta(factura: Factura): Promise<boolean> {
    const addVenta = await this.repositorio.addFactura(factura);
    if (addVenta) this.getCaja();
    return addVenta;
  }
}
