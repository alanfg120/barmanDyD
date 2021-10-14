import { Producto } from "src/app/productos/models/producto.model";


export interface Inventario {
  cantidad: number;
  fecha: Date;
  producto: Producto;
}
