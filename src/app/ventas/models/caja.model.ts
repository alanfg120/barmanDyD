

import { Inventario } from "./inventario.model";


export interface Caja {
  id?: number;
  fecha: Date | string;
  base: number;
  inventarios?: Inventario[];
}
