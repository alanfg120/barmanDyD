import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Caja } from '../models/caja.model';
import { Inventario } from '../models/inventario.model';
import { Venta } from '../models/venta.model';

export interface VentasState {
   venta?: Venta;
   caja?: Caja
   loading: boolean
}

export const createInitialState: VentasState = {
  loading : true
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ventas' , deepFreezeFn : (obj: unknown)=>obj})
export class VentasStore extends Store<VentasState> {

  constructor() {
    super(createInitialState);
  }

}
