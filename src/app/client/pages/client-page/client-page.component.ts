import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { Client } from '../../interfaces/Client.interfaces';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 //Nombres de las columnas que se usan en la tabla
 displayedColumns: string[] = ['idCliente', 'nombre', 'direccion', 'documento', 'email', 'fechaNacimiento', 'fechaCreacion', 'acciones'];

 //Aqui se ponen la fuente de los datos de la tabla
 dataSource = new MatTableDataSource<Client>(ELEMENT_DATA);

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

const ELEMENT_DATA: Client[] = [
  {
    idCliente: 1,
    nombre: 'Cliente 1',
    direccion: 'Dirección 1',
    documento: '123456789',
    email: 'cliente1@example.com',
    fechaNacimiento: new Date('1990-01-01'),
    fechaCreacion: new Date('2023-01-01'),
  },
  {
    idCliente: 2,
    nombre: 'Cliente 2',
    direccion: 'Dirección 2',
    documento: '987654321',
    email: 'cliente2@example.com',
    fechaNacimiento: new Date('1985-02-15'),
    fechaCreacion: new Date('2023-02-15'),
  },
  {
    idCliente: 3,
    nombre: 'Cliente 3',
    direccion: 'Dirección 3',
    documento: '456789012',
    email: 'cliente3@example.com',
    fechaNacimiento: new Date('1992-03-30'),
    fechaCreacion: new Date('2023-03-30'),
  },
];
