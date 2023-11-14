export interface Sale {
  idVenta: string;
  cliente_idCliente: number;
  productos: string;
  total: number;
  metodoPago: string;
  fecha: Date
}
