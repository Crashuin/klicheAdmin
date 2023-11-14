import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { Sale } from '../../interfaces/Sale.interfaces';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.css']
})
export class SalePageComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 //Nombres de las columnas que se usan en la tabla
 displayedColumns: string[] = ['idVenta', 'cliente_idCliente', 'productos', 'total', 'metodoPago', 'fecha', 'acciones'];

 //Aqui se ponen la fuente de los datos de la tabla
 dataSource = new MatTableDataSource<Sale>(ELEMENT_DATA);

 @ViewChild(MatPaginator) paginator!: MatPaginator;

 //TODO: Añadir filtro de busqueda

/*  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 } */

}

const ELEMENT_DATA: Sale[] = [
  {
    idVenta: 'V001',
    cliente_idCliente: 1,
    productos: 'Producto 1, Producto 2',
    total: 50.99,
    metodoPago: 'Tarjeta de crédito',
    fecha: new Date('2023-01-15'),
  },
  {
    idVenta: 'V002',
    cliente_idCliente: 2,
    productos: 'Producto 3',
    total: 30.50,
    metodoPago: 'Efectivo',
    fecha: new Date('2023-02-28'),
  },
  {
    idVenta: 'V003',
    cliente_idCliente: 3,
    productos: 'Producto 1, Producto 3',
    total: 70.25,
    metodoPago: 'Transferencia bancaria',
    fecha: new Date('2023-03-10'),
  },
];
