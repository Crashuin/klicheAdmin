import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../../interfaces/Category.interfaces';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //Nombres de las columnas que se usan en la tabla
 displayedColumns: string[] = ['idCategoria', 'nomCategoria', 'fechaCreacion', 'acciones'];

  //Aqui se ponen la fuente de los datos de la tabla
 dataSource = new MatTableDataSource<Category>(ELEMENT_DATA);

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

const ELEMENT_DATA: Category[] = [
  {
    idCategoria: 1,
    nomCategoria: 'Categoría A',
    fechaCreacion: new Date('2023-01-01'),
  },
  {
    idCategoria: 2,
    nomCategoria: 'Categoría B',
    fechaCreacion: new Date('2023-02-15'),
  },
  {
    idCategoria: 3,
    nomCategoria: 'Categoría C',
    fechaCreacion: new Date('2023-03-30'),
  },
];

