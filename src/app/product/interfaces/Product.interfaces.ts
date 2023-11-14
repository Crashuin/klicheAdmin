export interface Product {
  idProducto: number;
  categoria_idCategoria: number;
  nombreProducto: string;
  descripcion: string;
  imagen?: string;
  precioVenta: number;
  fechaCreacion: Date;
}
