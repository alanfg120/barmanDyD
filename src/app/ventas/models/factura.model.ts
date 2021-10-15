export interface Factura {
  id_caja: number,
  productos: ProductoFactura[]
}

export interface ProductoFactura {
  cantidad: number;
  id_producto: number
}
