import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos/models/producto.model';
import { Factura, ProductoFactura } from '../../models/factura.model';
import { ProductoFacturado } from '../../models/productoFacturados.model';
import { VentasQuery } from '../../store/ventas.query';
import { VentasService } from '../../store/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  productos: ProductoFacturado[] = [];

  constructor(public store: VentasQuery, private service: VentasService) {}

  ngOnInit(): void {}

  addProductoToFactura(producto: Producto) {
    const newProducto: ProductoFacturado = { cantidad: 1, producto };
    const index = this.productos.findIndex(
      (p) => p.producto.id === producto.id
    );
    if (index === -1) this.productos.push(newProducto);
    else this.addCantidadProducto(index);
  }

  addCantidadProducto(index: number) {
    this.productos[index].cantidad++;
  }

  deleteCantidadProducto(index: number) {
    if (this.productos[index].cantidad !== 0) this.productos[index].cantidad--;
    if (this.productos[index].cantidad === 0) this.deleteProducto(index);
  }
  deleteProducto(index: number) {
    this.productos.splice(index, 1);
  }

  get totalFactura() {
    let total = 0;
    this.productos.forEach((producto) => {
      total = total + producto.cantidad * producto.producto.precio;
    });
    return total;
  }

  async confirmarCompra(id_caja: number) {
    const productos = this.productos.map<ProductoFactura>((item) => {
      return { cantidad: item.cantidad, id_producto: item.producto.id || 0 };
    });

    let factura: Factura = {
      id_caja,
      productos,
    };
    const addVenta = await this.service.addVenta(factura);
    if (addVenta) {
      alert('Venta registrada');
      this.productos = [];
    }
  }
}
