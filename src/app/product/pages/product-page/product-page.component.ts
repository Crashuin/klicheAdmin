import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Product } from '../../interfaces/Product.interfaces';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 //Nombres de las columnas que se usan en la tabla
 displayedColumns: string[] = ['idProducto', 'categoria_idCategoria', 'nombreProducto', 'descripcion', 'imagen', 'precioVenta', 'fechaCreacion', 'acciones'];

 //Aqui se ponen la fuente de los datos de la tabla
 dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);

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


const ELEMENT_DATA: Product[] = [
  {
    idProducto: 1,
    categoria_idCategoria: 101,
    nombreProducto: 'Producto 1',
    descripcion: 'Descripción del producto 1',
    imagen: 'imagen1.jpg',
    precioVenta: 19.99,
    fechaCreacion: new Date('2023-01-01'),
  },
  {
    idProducto: 2,
    categoria_idCategoria: 102,
    nombreProducto: 'Producto 2',
    descripcion: 'Descripción del producto 2',
    imagen: 'imagen2.jpg',
    precioVenta: 29.99,
    fechaCreacion: new Date('2023-02-15'),
  },
  {
    idProducto: 3,
    categoria_idCategoria: 103,
    nombreProducto: 'Producto 3',
    descripcion: 'Descripción del producto 3',
    precioVenta: 39.99,
    fechaCreacion: new Date('2023-03-30'),
  },

 ];
