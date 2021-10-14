import { Producto } from "src/app/productos/models/producto.model";


export interface ProductoFacturado {
  cantidad: number;
  producto: Producto;
}
